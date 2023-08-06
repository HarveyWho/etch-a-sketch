for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++){
        let div = document.createElement("div");
        div.id = "pixel";
        document.getElementById("container").appendChild(div);
    }
}

let isDrawing = false;

// When the mouse is pressed down inside the container, start drawing
document.getElementById("container").addEventListener('mousedown', function(e) {
    if (e.target.id === "pixel") {
        isDrawing = true;
        e.target.style.backgroundColor = 'blue'; // Color the initial div
    }
});

// When the mouse is released inside the container, stop drawing
document.getElementById("container").addEventListener('mouseup', function() {
    isDrawing = false;
});

function attachDrawingEvents() {
    const divs = document.querySelectorAll('#container div');
    
    divs.forEach(div => {
        div.addEventListener('mouseenter', function() {
            if (isDrawing) {
                this.style.backgroundColor = 'blue';
            }
        });
    });
}

// Initially attach drawing events to the default grid
attachDrawingEvents();

document.getElementById("button1").addEventListener('click', function() {
    let size = parseInt(prompt("Enter your ideal grid size 0-100:"));
    
    // Validate the size
    if (isNaN(size) || size <= 0 || size > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }

    let gridSize = 560 / size;
    let container = document.getElementById("container");

    // Clear the container's current divs
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Create and append the new divs based on the input size
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            div.id = "pixel";
            div.style.flexBasis = gridSize + 'px';
            container.appendChild(div);
        }
    }

    attachDrawingEvents();
});
