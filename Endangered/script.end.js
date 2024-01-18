// script.js

// Magnify on click. 
function openOverlay(imageSrc) {
    const overlay = document.querySelector('.overlay-container');
    
    if (!overlay) {
        console.error('Overlay container not found');
        return;
    }

    const overlayImage = overlay.querySelector('.overlay-image');

    if (!overlayImage) {
        console.error('Overlay image not found');
        return;
    }

    // Set the src attribute of the img element
    overlayImage.src = imageSrc;

    overlay.style.display = 'flex';
}

function closeOverlay() {
    const overlay = document.querySelector('.overlay-container');

    if (overlay) {
        overlay.style.display = 'none';
    } else {
        console.error('Overlay container not found');
    }
}


// Create small and large versions. On Dec 28, I generated this list like this:
/*
Open the Finder and navigate to the folder containing your JPG files.
Hold down the "Command" key and click on the JPG files you want to include in the list to select multiple files.
Right-click (or Control-click) on one of the selected files.
In the context menu, choose "Copy [number] items."

Paste into excel. Use:
="createImageContainer('" & A3 & "', 'large/" & A3 & "');"

*/
// New images added at bottom of this list.
