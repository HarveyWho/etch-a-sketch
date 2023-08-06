
for (let i = 0; i < 16; i++) {
    for (let j =0; j<16; j++){
        let div = document.createElement("div");
        div.style.width="75px";
        div.style.height="75px";
        div.style.border = "1px solid black";
        // div.innerHTML=`child ${j}`
        document.getElementById("container").appendChild(div);
    }
}
