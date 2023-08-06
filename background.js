
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++){
        let div = document.createElement("div");
        // div.innerHTML=`${j+1}`
        div.id = "pixel"
        document.getElementById("container").appendChild(div);
    }
}

let isDrawing = false;

// When the mouse is pressed down inside the container, start drawing
document.getElementById("container").addEventListener('mousedown', function(e) {
    if (e.target.id === "pixel") {
        isDrawing = true;
    }
});

// When the mouse is released inside the container, stop drawing
document.getElementById("container").addEventListener('mouseup', function() {
    isDrawing = false;
});


// Select all divs inside #container
const divs = document.querySelectorAll('#container div');

// Add the event listener to each div
divs.forEach(div => {
    div.addEventListener('mouseenter', function() {
        if (isDrawing) {
            this.style.backgroundColor = 'blue'; // or getRandomColor() if you prefer random colors
        }
    });
});

// Optional: You might also want to color the div where the user starts the drawing
divs.forEach(div => {
    div.addEventListener('mousedown', function() {
        this.style.backgroundColor = 'blue'; // or getRandomColor()
    });
});

function attachDrawingEvents() {
    const divs = document.querySelectorAll('#container div');
    
    divs.forEach(div => {
        div.addEventListener('mouseenter', function() {
            if (isDrawing) {
                this.style.backgroundColor = 'blue';
            }
        });

        div.addEventListener('mousedown', function() {
            this.style.backgroundColor = 'blue';
        });
    });
}

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
            
            div.style.display = 'flex';
            div.style.flexBasis = gridSize + 'px';
            container.appendChild(div);
        }
    }

    attachDrawingEvents();
});
