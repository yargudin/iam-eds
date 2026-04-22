export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cols = [...row.children];
  const wrapper = document.createElement('div');
  wrapper.className = 'promo-ciudad-inner';

  // Left column: image
  if (cols[0]) {
    const imgCol = document.createElement('div');
    imgCol.className = 'promo-ciudad-image';
    imgCol.append(...cols[0].childNodes);
    wrapper.append(imgCol);
  }

  // Right column: text + button
  if (cols[1]) {
    const textCol = document.createElement('div');
    textCol.className = 'promo-ciudad-text';
    textCol.append(...cols[1].childNodes);
    wrapper.append(textCol);
  }

  block.replaceChildren(wrapper);
}
