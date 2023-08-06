
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++){
        let div = document.createElement("div");
        // div.innerHTML=`${j+1}`
        div.id = "pixel"
        document.getElementById("container").appendChild(div);
    }
}

let isDrawing = false;

// When the mouse is pressed down, start drawing
document.addEventListener('mousedown', function() {
    isDrawing = true;
});

// When the mouse is released or leaves the window, stop drawing
document.addEventListener('mouseup', function() {
    isDrawing = false;
});
document.addEventListener('mouseleave', function() {
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

document.getElementById("button1").addEventListener('click', function() {
    let size = prompt("enter your ideal grid size 0-100:")

})