
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++){
        let div = document.createElement("div");
        div.innerHTML=`${j+1}`
        document.getElementById("container").appendChild(div);
    }
}

// Select all divs inside #container
const divs = document.querySelectorAll('#container div');

// Add the event listener to each div
divs.forEach(div => {
    div.addEventListener('mouseenter', function() {
        // Change the background color to, for example, blue
        this.style.backgroundColor = 'blue';
    });
});
