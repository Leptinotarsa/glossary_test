// JavaScript Document, for toggling "show labels" button on anatomy drawing
document.getElementById('toggleLabels').addEventListener('click', function() {
  const labels = document.querySelectorAll('.part');
  const button = document.getElementById('toggleLabels');
  labels.forEach(label => {
    if (label.style.display === 'none') {
      label.style.display = 'block';
    } else {
      label.style.display = 'none';
    }
  });
  button.textContent = button.textContent === 'Show Labels' ? 'Hide Labels' : 'Show Labels';
});
