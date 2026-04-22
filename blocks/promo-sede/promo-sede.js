export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cols = [...row.children];
  const wrapper = document.createElement('div');
  wrapper.className = 'promo-sede-inner';

  // Left column: text + button
  if (cols[0]) {
    const textCol = document.createElement('div');
    textCol.className = 'promo-sede-text';
    textCol.append(...cols[0].childNodes);
    wrapper.append(textCol);
  }

  // Right column: image
  if (cols[1]) {
    const imgCol = document.createElement('div');
    imgCol.className = 'promo-sede-image';
    imgCol.append(...cols[1].childNodes);
    wrapper.append(imgCol);
  }

  block.replaceChildren(wrapper);
}
