const container = document.querySelector(".container");

function createGrid(size) {
    for (let i = 0; i < size*size; ++i) {
        let div = document.createElement("div");
        div.classList.add("pixel-div");
        container.appendChild(div);

        div.addEventListener("mouseover", (event) => {
            div.style.backgroundColor = "black";
        });
    }
}

createGrid(16);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let size = +prompt("What's a new grid? (MAX 100)");
    if (isNaN(size) || size > 100) {
        alert("Wrong input!");
    }

    // delete the old grid
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    document.documentElement.style.setProperty('--grid', size);

    createGrid(size);
});

