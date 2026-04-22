export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cols = [...row.children];
  const wrapper = document.createElement('div');
  wrapper.className = 'promo-oposiciones-inner';

  // Left column: image
  if (cols[0]) {
    const imgCol = document.createElement('div');
    imgCol.className = 'promo-oposiciones-image';
    imgCol.append(...cols[0].childNodes);
    wrapper.append(imgCol);
  }

  // Right column: icon + title + link
  if (cols[1]) {
    const textCol = document.createElement('div');
    textCol.className = 'promo-oposiciones-text';
    textCol.append(...cols[1].childNodes);
    wrapper.append(textCol);
  }

  block.replaceChildren(wrapper);
}
