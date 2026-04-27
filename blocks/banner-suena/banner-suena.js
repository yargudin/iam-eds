export default function decorate(block) {
    const rows = [...block.children];
    const inner = document.createElement('div');
    inner.className = 'banner-suena-inner';

  const content = document.createElement('div');
  content.className = 'banner-suena-content';

    if (rows[0]) {
    const cols = [...rows[0].children];

    // Left side: title + subtitle + link
    const textDiv = document.createElement('div');
    textDiv.className = 'banner-suena-text';
        if (cols[0]) {
      textDiv.append(...cols[0].childNodes);
        }

    // Extract the link from text into a separate CTA row
    const linkP = textDiv.querySelector('.button-container') || textDiv.querySelector('p:has(a)');

    const ctaRow = document.createElement('div');
    ctaRow.className = 'banner-suena-cta';

    const ctaLink = document.createElement('div');
    ctaLink.className = 'banner-suena-cta-link';
    if (linkP) {
      ctaLink.append(linkP);
    }
    ctaRow.append(ctaLink);

        // Right side: logo
        if (cols[1]) {
      const logoDiv = document.createElement('div');
      logoDiv.className = 'banner-suena-logo';
      logoDiv.append(...cols[1].childNodes);
      ctaRow.append(logoDiv);
        }

    content.append(textDiv);
    content.append(ctaRow);
  }

  inner.append(content);

  // Second row: greca decorative border (if present)
  if (rows[1]) {
    const grecaDiv = document.createElement('div');
    grecaDiv.className = 'banner-suena-greca';
    grecaDiv.append(...rows[1].children[0]?.childNodes || []);
    inner.append(grecaDiv);
    }

    block.replaceChildren(inner);
}
