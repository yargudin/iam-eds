export default function decorate(block) {
    const rows = [...block.children];
    const inner = document.createElement('div');
    inner.className = 'banner-suena-inner';

    const content = document.createElement('div');
    content.className = 'banner-suena-content';

    // Row 0: Title
    const textDiv = document.createElement('div');
    textDiv.className = 'banner-suena-text';
    if (rows[0]) {
        const titleContent = rows[0].querySelector('div');
        if (titleContent) {
            const h3 = document.createElement('h3');
            h3.textContent = titleContent.textContent.trim();
            textDiv.append(h3);
        }
    }
    content.append(textDiv);

    // CTA row: link (row 1) + logo (row 2)
    const ctaRow = document.createElement('div');
    ctaRow.className = 'banner-suena-cta';

    // Row 1: Link
    const ctaLink = document.createElement('div');
    ctaLink.className = 'banner-suena-cta-link';
    if (rows[1]) {
        const linkContainer = rows[1].querySelector('div');
        const anchor = linkContainer?.querySelector('a');
        if (anchor) {
            anchor.className = '';
            const container = anchor.closest('.button-container');
            if (container) container.className = '';

            const text = anchor.textContent;
            const match = text.match(/^(.*?)(Sueña Madrid.*)$/);
            if (match) {
                anchor.textContent = '';
                const prefix = document.createElement('span');
                prefix.className = 'banner-suena-link-prefix';
                prefix.textContent = match[1];
                const emphasis = document.createElement('span');
                emphasis.className = 'banner-suena-link-emphasis';
                emphasis.textContent = match[2];
                anchor.append(prefix, emphasis);
            }
            const p = document.createElement('p');
            p.append(anchor);
            ctaLink.append(p);
        } else if (linkContainer) {
            ctaLink.append(...linkContainer.childNodes);
        }
    }
    ctaRow.append(ctaLink);

    // Row 2: Logo image
    if (rows[2]) {
        const logoDiv = document.createElement('div');
        logoDiv.className = 'banner-suena-logo';
        const logoContent = rows[2].querySelector('div');
        if (logoContent) {
            logoDiv.append(...logoContent.childNodes);
        }
        ctaRow.append(logoDiv);
    }

    content.append(ctaRow);
    inner.append(content);

    // Greca decorative border
    const greca = document.createElement('div');
    greca.className = 'banner-suena-greca';
    inner.append(greca);

    block.replaceChildren(inner);
}
