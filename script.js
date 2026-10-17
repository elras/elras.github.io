// Preserve the existing Bootstrap table styling and responsive wrappers.
document.querySelectorAll('.article-entry table').forEach((table) => {
  if (table.parentElement.classList.contains('table-responsive')) return;

  table.classList.add('table');
  const wrapper = document.createElement('div');
  wrapper.className = 'table-responsive';
  table.replaceWith(wrapper);
  wrapper.append(table);
});
