// FAQs der Architekturmodell-Flatrate.
// Einzige Quelle für die sichtbare FAQ-Sektion (src-pages/ArchitekturmodelleAbo.tsx)
// UND das FAQPage-Schema (app/architekturmodelle-abo/page.tsx).
// Eigenes Modul, weil ein Export aus einer 'use client'-Datei serverseitig
// nicht gemappt werden kann (Client-Reference).
export const ABO_FAQS = [
  { q: "Was kostet die Architekturmodell-Flatrate?", a: "Starter kostet €490 pro Monat und enthält bis zu 2 Modelle. Professional kostet €890 pro Monat mit bis zu 4 Modellen, Studio €2.500 pro Monat mit bis zu 8 Modellen. Alle Preise exkl. MwSt., ohne Einrichtungsgebühr, monatlich kündbar. Umgerechnet liegt ein Modell im Kontingent je nach Paket bei €222 bis €313." },
  { q: "Ab wann lohnt sich die Flatrate gegenüber Einzelaufträgen?", a: "Als Faustregel ab zwei Modellen pro Monat: Beim Starter-Paket (€490) rechnet sich die Flatrate, sobald ein vergleichbares Modell im Einzelauftrag mehr als €245 kostet. Dazu kommen 48-Stunden-Lieferung und Fixkosten statt Einzelangeboten. Den ehrlichen Vergleich mit Break-even-Tabelle gibt es im Flatrate-Ratgeber." },
  { q: "Welche Dateiformate werden akzeptiert?", a: "Wir akzeptieren STL, OBJ, STEP, 3DM (Rhino), DWG/DXF sowie native Formate aus ArchiCAD, Revit und SketchUp. Falls Sie kein druckfertiges Modell haben, helfen wir bei der Aufbereitung – inklusive im Professional- und Studio-Paket." },
  { q: "Gibt es eine Mindestlaufzeit?", a: "Nein. Die Flatrate ist monatlich kündbar, ohne Fristen oder Aufwandsentschädigung. Wir sind überzeugt, dass Sie bleiben werden – weil die Qualität stimmt." },
  { q: "Was passiert, wenn ich mein Modell-Kontingent nicht ausschöpfe?", a: "Nicht genutzte Modelle verfallen am Monatsende. Es gibt jedoch keine Nachberechnung bei Überschreitung – zusätzliche Modelle werden zum günstigen Flatrate-Zusatzpreis abgerechnet." },
  { q: "Wie groß können die Modelle sein?", a: "Je nach Paket bis zu 35×35×35 cm als Einzeldruck. Größere Modelle fertigen wir als modulares System – ohne Aufpreis im Studio-Paket." },
  { q: "Liefern Sie auch nach Deutschland?", a: "Ja. Wir liefern in ganz Österreich und Deutschland. Die Lieferzeit beträgt 48–72 Stunden nach Deutschland." },
  { q: "Kann ich das Abo upgraden oder downgraden?", a: "Ja, jederzeit zum nächsten Monatsersten – unkompliziert per E-Mail." },
  { q: "Was bedeutet \"Produktionspriorität\"?", a: "Aufträge aus dem Professional- und Studio-Paket werden vor allen Einzelaufträgen produziert – so hält die 48h-Lieferzeit auch in der Hochsaison, etwa vor Wettbewerbsdeadlines. Die 48-Stunden-Lieferung selbst ist in allen drei Paketen enthalten." },
];
