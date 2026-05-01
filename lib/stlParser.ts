/**
 * STL Parser – Parst binäre und ASCII STL-Dateien im Browser
 * Nutzt Three.js STLLoader für robustes Parsing.
 */

import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import * as THREE from 'three';

export interface GeometryData {
  volumeCm3: number;
  surfaceCm2: number;
  boundingBoxMm: { x: number; y: number; z: number };
  triangleCount: number;
}

/**
 * Parst einen ArrayBuffer einer STL-Datei und gibt Geometriedaten zurück.
 */
export function parseSTL(buffer: ArrayBuffer): GeometryData {
  const loader = new STLLoader();
  const geometry = loader.parse(buffer);

  const position = geometry.attributes.position;
  if (!position || position.count < 3) {
    throw new Error('Die STL-Datei enthält keine gültige Geometrie.');
  }

  const triangleCount = position.count / 3;

  // ── Bounding Box ──────────────────────────────────────
  geometry.computeBoundingBox();
  const size = new THREE.Vector3();
  geometry.boundingBox!.getSize(size);

  const boundingBoxMm = {
    x: Math.round(size.x * 100) / 100,
    y: Math.round(size.y * 100) / 100,
    z: Math.round(size.z * 100) / 100,
  };

  // ── Oberfläche (Summe aller Dreiecksflächen) ──────────
  let surfaceArea = 0;
  const ab = new THREE.Vector3();
  const ac = new THREE.Vector3();
  const cross = new THREE.Vector3();

  for (let i = 0; i < position.count; i += 3) {
    const ax = position.getX(i);
    const ay = position.getY(i);
    const az = position.getZ(i);

    const bx = position.getX(i + 1);
    const by = position.getY(i + 1);
    const bz = position.getZ(i + 1);

    const cx = position.getX(i + 2);
    const cy = position.getY(i + 2);
    const cz = position.getZ(i + 2);

    ab.set(bx - ax, by - ay, bz - az);
    ac.set(cx - ax, cy - ay, cz - az);
    cross.crossVectors(ab, ac);

    surfaceArea += cross.length() / 2;
  }

  // ── Volumen (Tetraeder-/Divergenz-Methode) ────────────
  let volume = 0;

  for (let i = 0; i < position.count; i += 3) {
    const ax = position.getX(i);
    const ay = position.getY(i);
    const az = position.getZ(i);

    const bx = position.getX(i + 1);
    const by = position.getY(i + 1);
    const bz = position.getZ(i + 1);

    const cx = position.getX(i + 2);
    const cy = position.getY(i + 2);
    const cz = position.getZ(i + 2);

    volume += (
      ax * by * cz +
      ay * bz * cx +
      az * bx * cy -
      az * by * cx -
      ay * bx * cz -
      ax * bz * cy
    ) / 6;
  }

  volume = Math.abs(volume);

  // STL-Einheiten sind typischerweise mm → mm³ zu cm³ = /1000, mm² zu cm² = /100
  const volumeCm3 = volume / 1000;
  const surfaceCm2 = surfaceArea / 100;

  // Geometrie freigeben
  geometry.dispose();

  return {
    volumeCm3,
    surfaceCm2,
    boundingBoxMm,
    triangleCount,
  };
}
