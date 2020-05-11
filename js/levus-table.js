const table = document.querySelectorAll('table');

if (table.length > 0) {
  table.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.className = 'levus-table-wrapper';
    const table = item.cloneNode(true);
    item.replaceWith(wrapper);
    wrapper.append(table);
  });
}