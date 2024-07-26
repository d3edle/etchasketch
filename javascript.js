let body = document.querySelector('body');
let topDiv = document.createElement('div');
let botDiv = document.createElement('div');

botDiv.style.display = `flex`;
botDiv.style.flexDirection = `column`;
botDiv.style.alignItems = `center`;
botDiv.id = `botDiv`;

body.style.backgroundColor = 'lightBlue';

let gridSize = 0;

// body.style.width = '1000px';
// body.style.height = '1000px';
let button = document.createElement('button');
button.style.width = `250px`;
button.style.height = `75px`;
button.style.borderRadius = `30px`;
button.textContent = `Set grid size`;
button.style.fontSize = `30px`;

let cBtn = document.createElement('button');
cBtn.style.width = `250px`;
cBtn.style.height = `75px`;
cBtn.style.borderRadius = `30px`;
cBtn.textContent = `Clear`;
cBtn.style.fontSize = `30px`;

topDiv.style.display =  `flex`;
topDiv.style.justifyContent = `space-around`;
topDiv.style.margin = `10px`;




clear = function(){
    document.querySelectorAll('.square').forEach(e => e.style.backgroundColor = `white`);
}

cBtn.addEventListener('click', () => {
    clear();
})

button.addEventListener('click', () => {
    gridSize = prompt('What length grid do you want?');
    while(gridSize > 100){
        console.log(gridSize, 100)
        gridSize = prompt('Too big. What length grid do you want?');
    }
    document.querySelectorAll('.square').forEach(e => e.remove());

    for(let i = 0; i<gridSize; i++){
        let line = document.createElement('div');
        line.className = 'square';
        // line.style.width = `1000px;`
        // line.style.height = `${1000/gridSize}px`;
        line.style.display = 'flex';
        line.style.flex = 1;
        line.style.flexDirection = 'row';
        line.style.border = 'black 2px';
        botDiv.appendChild(line);
        for(let j = 0; j< gridSize; j++){
            let gridBox = document.createElement('div');
            gridBox.className = 'square';
            // gridBox.style.width = `${1000/gridSize}px`;
            // gridBox.style.height = `${1000/gridSize}px`;
            gridBox.style.border = '1px solid black';
            gridBox.style.padding = `${(350/gridSize)}px`;
            gridBox.addEventListener("mouseover", () => {
                gridBox.style.backgroundColor = 'black';
            });
            line.appendChild(gridBox);
    
        }
    }
})

body.appendChild(topDiv);
body.appendChild(botDiv);
topDiv.appendChild(button);
topDiv.appendChild(cBtn);



// body.style.display = 'flex';
// body.style.flexDirection = 'row';
for(let i = 0; i<10; i++){
    let line = document.createElement('div');
    line.className = 'square';
    line.id = 'line';
    // line.style.width = `1000px;`
    // line.style.height = `${1000/4}px`;
    line.style.display = 'flex';
    line.style.flex = '1';
    line.style.flexGrow = '1';
    line.style.flexDirection = 'row';
    line.style.border = 'black 1px';
    line.style.backgroundColor = 'white';
    botDiv.appendChild(line);
    for(let j = 0; j<10; j++){
        let gridBox = document.createElement('div');
        gridBox.className = 'square';
        gridBox.style.border = '1px solid black';
        gridBox.style.backgroundColor = 'white';
        // gridBox.style.width = `${1000/gridSize}px`;
        // gridBox.style.height = `${1000/gridSize}px`;
        gridBox.style.padding = `${350/10}px`;
        gridBox.addEventListener("mouseover", () => {
            gridBox.style.backgroundColor = 'black';
        });
        line.appendChild(gridBox);

    }
}