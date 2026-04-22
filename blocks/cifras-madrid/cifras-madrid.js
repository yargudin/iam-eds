export default function decorate(block) {
  const rows = [...block.children];
  const grid = document.createElement('div');
  grid.className = 'cifras-madrid-grid';

  rows.forEach((row) => {
    const card = document.createElement('div');
    card.className = 'cifras-madrid-card';
    const cols = [...row.children];

    cols.forEach((col) => {
      card.append(...col.childNodes);
    });

    grid.append(card);
  });

  block.replaceChildren(grid);
}
