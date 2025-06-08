document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', function (e) {
    // Prevent toggling when clicking on form controls
    if (e.target.tagName === 'SELECT' || e.target.tagName === 'OPTION') return;

    // Collapse all boxes
    document.querySelectorAll('.box').forEach(b => b.classList.remove('expanded'));

    // Expand the clicked one
    this.classList.add('expanded');
  });
});
