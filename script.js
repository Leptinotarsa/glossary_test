// script.js

/* 
Following, there are 2 sets of code for each image #, where these #s are in the img scr tag
   The first sets the scaling effect - blow up by (3)
   The second says to reset to original - (1)
 */
   
// This is a single-line comment

/* I am going to comment out the all of this, which works for zoom in-out, 
but not for selecting WHERE to zoom in


document.getElementById('magnifyImage1').addEventListener('mouseover', function () {
  this.style.transform = 'scale(3)';
});

document.getElementById('magnifyImage1').addEventListener('mouseout', function () {
  this.style.transform = 'scale(1)';
});

document.getElementById('magnifyImage2').addEventListener('mouseover', function () {
  this.style.transform = 'scale(3)';
});

document.getElementById('magnifyImage2').addEventListener('mouseout', function () {
  this.style.transform = 'scale(1)';
});
*/

// All of the fancy stuff below. Just go back to above if this is too messy

// script.js

// script.js

let isDragging = false;
let offsetX, offsetY, initialX, initialY;

function startDrag(event) {
  isDragging = true;

  const image = event.target;

  const rect = image.getBoundingClientRect();
  initialX = rect.left + window.scrollX;
  initialY = rect.top + window.scrollY;

  offsetX = event.clientX - initialX;
  offsetY = event.clientY - initialY;

  image.style.transition = 'none'; // Disable transition during drag
}

function dragImage(event) {
  if (!isDragging) return;

  const image = event.target;

  const x = event.clientX - offsetX;
  const y = event.clientY - offsetY;

  // Apply the translation
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
}

function stopDrag() {
  if (!isDragging) return;

  const image = event.target;
  image.style.transition = ''; // Re-enable transition after drag
  isDragging = false;
}

// Add events to each image
const magnifyImage1 = document.getElementById('magnifyImage1');
magnifyImage1.addEventListener('mousedown', startDrag);
magnifyImage1.addEventListener('mouseup', stopDrag);
magnifyImage1.addEventListener('mousemove', dragImage);

const magnifyImage2 = document.getElementById('magnifyImage2');
magnifyImage2.addEventListener('mousedown', startDrag);
magnifyImage2.addEventListener('mouseup', stopDrag);
magnifyImage2.addEventListener('mousemove', dragImage);

// Repeat for other images (magnifyImage3, magnifyImage4, magnifyImage5)
