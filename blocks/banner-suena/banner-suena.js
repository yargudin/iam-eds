export default function decorate(block) {
    const rows = [...block.children];
    const inner = document.createElement('div');
    inner.className = 'banner-suena-inner';

    const content = document.createElement('div');
    content.className = 'banner-suena-content';

    if (rows[0]) {
        const cols = [...rows[0].children];

        const textDiv = document.createElement('div');
        textDiv.className = 'banner-suena-text';
        if (cols[0]) {
            textDiv.append(...cols[0].childNodes);
        }

        // Extract the link into a separate CTA row
        const linkP = textDiv.querySelector('.button-container') || textDiv.querySelector('p:has(a)');

        const ctaRow = document.createElement('div');
        ctaRow.className = 'banner-suena-cta';

        const ctaLink = document.createElement('div');
        ctaLink.className = 'banner-suena-cta-link';
        if (linkP) {
            const anchor = linkP.querySelector('a');
            if (anchor) {
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
            }
            ctaLink.append(linkP);
        }
        ctaRow.append(ctaLink);

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

    const greca = document.createElement('div');
    greca.className = 'banner-suena-greca';
    inner.append(greca);

    block.replaceChildren(inner);
}
