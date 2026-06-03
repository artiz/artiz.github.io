#!/bin/bash
set -e

### Prerequisites:
# sudo apt-get update
# sudo apt-get install -y pandoc
# pip install weasyprint        # HTML/CSS-aware PDF engine (renders the flex layout)

# weasyprint honors the HTML <div style="display:flex">/CSS in the markdown,
# unlike the default LaTeX engine which drops raw HTML and uses wide margins.
pandoc README.md \
    --pdf-engine=weasyprint \
    --css=cv.css \
    --variable pagetitle="Artem Kustikov - CV" \
    -o Artem_Kustikov_CV.pdf

pandoc GermanVersion.md \
    --pdf-engine=weasyprint \
    --css=cv.css \
    --variable pagetitle="Artem Kustikov - Lebenslauf" \
    -o Artem_Kustikov_CV_DE.pdf
