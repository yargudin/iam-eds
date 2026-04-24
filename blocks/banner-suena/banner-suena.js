export default function decorate(block) {
    const rows = [...block.children];
    const inner = document.createElement('div');
    inner.className = 'banner-suena-inner';

    // First row: background image or content area
    if (rows[0]) {
        const contentRow = rows[0];
        const cols = [...contentRow.children];

        // Left side: title + link
        if (cols[0]) {
            const textCol = document.createElement('div');
            textCol.className = 'banner-suena-text';
            textCol.append(...cols[0].childNodes);
            inner.append(textCol);
        }

        // Right side: logo
        if (cols[1]) {
            const logoCol = document.createElement('div');
            logoCol.className = 'banner-suena-logo';
            logoCol.append(...cols[1].childNodes);
            inner.append(logoCol);
        }
    }

    block.replaceChildren(inner);
}
