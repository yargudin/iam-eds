export default function decorate(block) {
  const rows = [...block.children];
  const wrapper = document.createElement('div');
  wrapper.className = 'te-ayudamos-inner';

  // First row is the title with icon
  if (rows[0]) {
    const titleRow = rows[0];
    titleRow.className = 'te-ayudamos-title';
    wrapper.append(titleRow);
  }

  // Remaining rows are shortcut pills
  const pillsContainer = document.createElement('div');
  pillsContainer.className = 'te-ayudamos-pills';

  rows.slice(1).forEach((row) => {
    const pill = document.createElement('div');
    pill.className = 'te-ayudamos-pill';
    while (row.firstElementChild) {
      pill.append(...row.firstElementChild.childNodes);
    }
    pillsContainer.append(pill);
  });

  wrapper.append(pillsContainer);
  block.replaceChildren(wrapper);
}
