// JavaScript Document, for toggling "show labels" button on anatomy drawing
document.getElementById('toggleLabels').addEventListener('click', function() {
  const baseDrawing = document.getElementById('baseDrawing');
  const labeledDrawing = document.getElementById('labeledDrawing');
  const hotspots = document.querySelectorAll('.hotspot');
  const button = document.getElementById('toggleLabels');

  if (labeledDrawing.style.display === 'none') {
    labeledDrawing.style.display = 'block';
    baseDrawing.style.display = 'none';
    hotspots.forEach(hotspot => hotspot.style.display = 'block');
    button.textContent = 'Hide Labels';
  } else {
    labeledDrawing.style.display = 'none';
    baseDrawing.style.display = 'block';
    hotspots.forEach(hotspot => hotspot.style.display = 'none');
    button.textContent = 'Show Labels';
  }
    });