document.addEventListener('DOMContentLoaded', function() {
  const showSidebarButton = document.querySelector('.show-sidebar');
  const hideSidebarButton = document.querySelector('.hide-sidebar');
  const sidebar = document.querySelector('.sidebar');

  function showSidebar(event) {
    event.preventDefault();
    sidebar.style.display = 'flex';
  }

  function hideSidebar(event) {
    event.preventDefault();
    sidebar.style.display = 'none';
  }

  if (showSidebarButton) {
    showSidebarButton.addEventListener('click', showSidebar);
  }

  if (hideSidebarButton) {
    hideSidebarButton.addEventListener('click', hideSidebar);
  }
});
