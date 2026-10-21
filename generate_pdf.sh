#!/bin/bash
set -e

### Prerequisites:
# sudo apt-get update
# sudo apt-get install -y pandoc
# pip install weasyprint        # HTML/CSS-aware PDF engine (renders the flex layout)

# The PDF uses its own photo (assets/photo-pdf.jpg); the site keeps
# assets/photo-preview-128.png, so the image is swapped on the fly.
PDF_PHOTO='s#assets/photo-preview-128.png#assets/photo-pdf.jpg#'

# weasyprint honors the HTML <div style="display:flex">/CSS in the markdown,
# unlike the default LaTeX engine which drops raw HTML and uses wide margins.
sed "$PDF_PHOTO" README.md | pandoc -f markdown \
    --pdf-engine=weasyprint \
    --css=cv.css \
    --variable pagetitle="Artem Kustikov - CV" \
    -o Artem_Kustikov_CV.pdf

sed "$PDF_PHOTO" GermanVersion.md | pandoc -f markdown \
    --pdf-engine=weasyprint \
    --css=cv.css \
    --variable pagetitle="Artem Kustikov - Lebenslauf" \
    -o Artem_Kustikov_CV_DE.pdf
