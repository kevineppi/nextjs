#!/usr/bin/env bash
# ══════════════════════════════════════════════════════════════════
# Lighthouse-Audit-Script — ek-druck.at
# ══════════════════════════════════════════════════════════════════
#
# Zweck: Automatisierter CWV-Audit der wichtigsten Pages.
# Output: HTML-Reports pro Page in scripts/lighthouse-reports/.
#
# Verwendung:
#   ./scripts/lighthouse-audit.sh           # alle Pages, Mobile + Desktop
#   ./scripts/lighthouse-audit.sh mobile    # nur Mobile
#   ./scripts/lighthouse-audit.sh desktop   # nur Desktop
#   ./scripts/lighthouse-audit.sh quick     # nur Top-5-Pages
#
# Voraussetzung: Node.js + lighthouse CLI installiert.
# Installation: npm install -g lighthouse
# ══════════════════════════════════════════════════════════════════

set -e

# Pfad zum Report-Ordner
REPORT_DIR="scripts/lighthouse-reports/$(date +%Y-%m-%d_%H-%M)"
mkdir -p "$REPORT_DIR"

# Basis-URL
BASE_URL="https://www.ek-druck.at"

# Pages die geprüft werden — sortiert nach Priorität
TOP_5_PAGES=(
  ""                              # Home
  "/messemodelle"
  "/architekturmodelle"
  "/branchen/maschinenbau"
  "/kostenrechner"
)

ALL_PAGES=(
  # Top-Pages
  ""                              # Home
  "/messemodelle"
  "/architekturmodelle"
  "/prototyping"
  "/firmenkunden"
  "/einzelanfertigungen"
  "/kostenrechner"
  "/3d-druck-materialien"
  "/kontakt"
  "/ueber-uns"
  "/referenzen"

  # Trust-Pages
  "/qualitaet"
  "/cases"
  "/preise"
  "/checkliste"

  # Branchen
  "/branchen"
  "/branchen/maschinenbau"
  "/branchen/schiffbau"
  "/branchen/energietechnik"
  "/branchen/automotive"
  "/branchen/anlagenbau"
  "/branchen/elektrotechnik"

  # Bundesländer
  "/3d-druck-wien"
  "/3d-druck-oberoesterreich"
  "/3d-druck-steiermark"
  "/3d-druck-salzburg"
)

# Modus bestimmen
MODE="${1:-all}"
case "$MODE" in
  mobile|desktop|quick|all)
    ;;
  *)
    echo "Unbekannter Modus: $MODE"
    echo "Erlaubt: mobile | desktop | quick | all"
    exit 1
    ;;
esac

# Pages-Set wählen
if [ "$MODE" = "quick" ]; then
  PAGES=("${TOP_5_PAGES[@]}")
else
  PAGES=("${ALL_PAGES[@]}")
fi

# Lighthouse-Befehl bauen
# HINWEIS: Lighthouse 13+ hat --preset mobile entfernt. Mobile = Default ohne Flag.
# Desktop = --preset desktop ODER --form-factor=desktop --screen-emulation.disabled
run_audit() {
  local path="$1"
  local mode="$2"            # "mobile" oder "desktop"
  local url="${BASE_URL}${path}"
  local safe_path
  safe_path="${path//\//_}"
  safe_path="${safe_path:-home}"
  local report_file="${REPORT_DIR}/${safe_path}_${mode}.html"

  echo "▶ ${mode}: ${url}"

  if [ "$mode" = "desktop" ]; then
    npx lighthouse "$url" \
      --output html \
      --output-path "$report_file" \
      --preset desktop \
      --quiet \
      --chrome-flags="--headless" \
      --only-categories=performance,accessibility,best-practices,seo \
      || echo "⚠ Fehler bei: ${url} (desktop)"
  else
    # Mobile = Lighthouse-Default, kein --preset Flag
    npx lighthouse "$url" \
      --output html \
      --output-path "$report_file" \
      --form-factor=mobile \
      --quiet \
      --chrome-flags="--headless" \
      --only-categories=performance,accessibility,best-practices,seo \
      || echo "⚠ Fehler bei: ${url} (mobile)"
  fi
}

echo "════════════════════════════════════════════════"
echo "Lighthouse-Audit ek-druck.at — Modus: $MODE"
echo "Report-Ordner: $REPORT_DIR"
echo "════════════════════════════════════════════════"
echo ""

# Pages durchlaufen
for path in "${PAGES[@]}"; do
  if [ "$MODE" = "all" ] || [ "$MODE" = "quick" ]; then
    run_audit "$path" mobile
    run_audit "$path" desktop
  elif [ "$MODE" = "mobile" ]; then
    run_audit "$path" mobile
  elif [ "$MODE" = "desktop" ]; then
    run_audit "$path" desktop
  fi
done

# Summary-Report generieren
echo ""
echo "════════════════════════════════════════════════"
echo "✅ Audit fertig"
echo ""
echo "Reports liegen in: $REPORT_DIR"
echo ""
echo "Übersicht der Reports:"
ls -1 "$REPORT_DIR" | head -40
echo ""
echo "📊 Index anzeigen:"
echo "  open $REPORT_DIR"
echo ""
echo "════════════════════════════════════════════════"

# macOS: Ordner im Finder öffnen
if [ "$(uname)" = "Darwin" ]; then
  open "$REPORT_DIR"
fi
