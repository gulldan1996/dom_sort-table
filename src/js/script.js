'use strict'

function madeSortTable(table) {
  const headerTh = table.querySelector('[data-header]');
  const tbody = table.querySelector('[data-th-body]');

  headerTh.addEventListener('click', (e) => {
    const th = e.target.closest('th');
    if (!th) return;

    const column = th.cellIndex;
    const rows = [...tbody.children];
    const sortItem = th.dataset.type;

    rows.sort((rowA, rowB) => {
      const valueA = rowA.cells[column].textContent;
      const valueB = rowB.cells[column].textContent;

      switch (sortItem) {
        case 'number':
          return (+valueA) - (+valueB);

        case 'string':
          return (valueA > valueB) ? 1 : -1;

        default:
          return 0;
      }
    });
    for (const row of rows) {
      tbody.appendChild(row);
    }
  });
};

madeSortTable(
  document.querySelector('[data-my-table]')
);
