export default function decorate(block) {
  const rows = [...block.children];

  // Row 0: hero image
  const imageRow = rows[0];
  const picture = imageRow.querySelector('picture') || imageRow.querySelector('img');

  // Row 1: title text
  const titleRow = rows[1];

  block.textContent = '';

  // Greca decorative border
  const greca = document.createElement('div');
  greca.className = 'hero-mosaic-greca';
  greca.setAttribute('aria-hidden', 'true');
  block.parentElement.insertBefore(greca, block);

  // Mosaic container — uses a single image behind a CSS grid mask
  const mosaic = document.createElement('div');
  mosaic.className = 'hero-mosaic-grid';

  // Get the image src for the background
  const img = picture?.querySelector?.('img') || picture;
  const imgSrc = img?.src || img?.getAttribute('src') || '';

  // Create 8 tile cells, each showing a portion of the background image
  for (let i = 0; i < 8; i += 1) {
    const cell = document.createElement('div');
    cell.className = `hero-mosaic-cell hero-mosaic-cell-${i + 1}`;
    cell.style.backgroundImage = `url('${imgSrc}')`;
    mosaic.append(cell);
  }

  block.append(mosaic);

  // Title overlay card
  const titleCard = document.createElement('div');
  titleCard.className = 'hero-mosaic-title';

  if (titleRow) {
    const content = titleRow.querySelector('div');
    if (content) {
      titleCard.innerHTML = content.innerHTML;
    }
  }

  block.append(titleCard);
}
