-- Herkunfts-Erfassung fuer Anfragen · ekdruck · 04.09.2026
-- Ziel: pro Anfrage nachvollziehen, ob sie aus einer Google-Anzeige,
-- aus der organischen Suche, aus LinkedIn oder direkt kam.
-- Alle Spalten sind optional, bestehende Zeilen bleiben unberuehrt.
-- Nur contact_inquiries: eine Tabelle 'anfragen' existiert in diesem
-- Projekt nicht, der Kostenrechner schreibt ebenfalls nach contact_inquiries.

alter table public.contact_inquiries
  add column if not exists gclid         text,
  add column if not exists utm_source    text,
  add column if not exists utm_medium    text,
  add column if not exists utm_campaign  text,
  add column if not exists utm_term      text,
  add column if not exists utm_content   text,
  add column if not exists landing_page  text,
  add column if not exists referrer      text,
  add column if not exists erfasst_am    timestamptz;

-- Nur Anfragen mit Anzeigenklick, fuer den spaeteren Offline-Import
create index if not exists idx_contact_inquiries_gclid
  on public.contact_inquiries (gclid) where gclid is not null;
