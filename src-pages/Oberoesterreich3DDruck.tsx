'use client'

import { useEffect } from 'react';
import DruckRegion from "./DruckRegion";

const Oberoesterreich3DDruck = () => {
  useEffect(() => {
    // noindex: avoids keyword cannibalization with the main homepage
    // (company is based in OÖ — this page would compete with the homepage for core terms)
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex, follow');
    }
    return () => {
      const meta = document.querySelector('meta[name="robots"]');
      if (meta) {
        meta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      }
    };
  }, []);

  return <DruckRegion region="oberoesterreich" />;
};

export default Oberoesterreich3DDruck;
