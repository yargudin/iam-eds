export default function decorate(block) {
  const rows = [...block.children];
  const inner = document.createElement('div');
  inner.className = 'promo-oposiciones-inner';

  if (rows[0]) {
    const cols = [...rows[0].children];

    // Left: image
    if (cols[0]) {
      const imageDiv = document.createElement('div');
      imageDiv.className = 'promo-oposiciones-image';
      imageDiv.append(...cols[0].childNodes);
      inner.append(imageDiv);
    }

    // Highlight bar overlapping image bottom
    const highlight = document.createElement('div');
    highlight.className = 'promo-oposiciones-highlight';

    // Azulejos icon
    const iconDiv = document.createElement('div');
    iconDiv.className = 'promo-oposiciones-icon';
    const iconImg = document.createElement('img');
    iconImg.src = '/icons/azulejos.svg';
    iconImg.alt = 'Azulejos';
    iconImg.width = 100;
    iconImg.height = 100;
    iconDiv.append(iconImg);
    highlight.append(iconDiv);

    // Right: text + link
    if (cols[1]) {
      const textDiv = document.createElement('div');
      textDiv.className = 'promo-oposiciones-text';
      textDiv.append(...cols[1].childNodes);
      highlight.append(textDiv);
    }

    inner.append(highlight);
  }

  block.replaceChildren(inner);
}
