export default function decorate(block) {
  const rows = [...block.children];
  const grid = document.createElement('div');
  grid.className = 'cifras-madrid-grid';

  // Presupuesto card (row 0)
  if (rows[0]) {
    const cols = [...rows[0].children];
    const card = document.createElement('div');
    card.className = 'cifras-madrid-card cifras-madrid-card-large';

    const label = document.createElement('div');
    label.className = 'cifras-madrid-label';
    label.textContent = cols[0]?.textContent?.trim() || '';
    card.append(label);

    const img = document.createElement('div');
    img.className = 'cifras-madrid-image';
    const imgEl = document.createElement('img');
    imgEl.src = '/blocks/cifras-madrid/video-placeholder.png';
    imgEl.alt = 'Madrid en cifras';
    img.append(imgEl);
    card.append(img);

    const value = document.createElement('div');
    value.className = 'cifras-madrid-value';
    value.textContent = cols[1]?.textContent?.trim() || '';
    card.append(value);
    grid.append(card);
  }

  // Desktop azulejos tiles (hidden on mobile)
  const azulejos = document.createElement('div');
  azulejos.className = 'cifras-madrid-azulejos';
  ['azulejos-tile1.png', 'azulejos-tile2.png', 'azulejos-tile1.png'].forEach((src) => {
    const img = document.createElement('img');
    img.src = `/blocks/cifras-madrid/${src}`;
    img.alt = 'Azulejos';
    azulejos.append(img);
  });
  grid.append(azulejos);

  // Mobile azulejos (single image, shown only on mobile)
  const azulejosMobile = document.createElement('div');
  azulejosMobile.className = 'cifras-madrid-azulejos-mobile';
  const azulejosMobileImg = document.createElement('img');
  azulejosMobileImg.src = '/icons/azulejos-new.png';
  azulejosMobileImg.alt = 'Azulejos';
  azulejosMobile.append(azulejosMobileImg);
  grid.append(azulejosMobile);

  // Contratos card (row 1)
  if (rows[1]) {
    const cols = [...rows[1].children];
    const card = document.createElement('div');
    card.className = 'cifras-madrid-card cifras-madrid-card-contratos';
    const label = document.createElement('div');
    label.className = 'cifras-madrid-label';
    label.textContent = cols[0]?.textContent?.trim() || '';
    card.append(label);
    const value = document.createElement('div');
    value.className = 'cifras-madrid-value';
    value.textContent = cols[1]?.textContent?.trim() || '';
    card.append(value);
    grid.append(card);
  }

  // Citas atendidas (row 2)
  if (rows[2]) {
    const cols = [...rows[2].children];
    const card = document.createElement('div');
    card.className = 'cifras-madrid-card cifras-madrid-card-citas';
    const label = document.createElement('div');
    label.className = 'cifras-madrid-label';
    label.textContent = cols[0]?.textContent?.trim() || '';
    card.append(label);
    const value = document.createElement('div');
    value.className = 'cifras-madrid-value';
    value.textContent = cols[1]?.textContent?.trim() || '';
    card.append(value);
    grid.append(card);
  }

  block.replaceChildren(grid);
}
