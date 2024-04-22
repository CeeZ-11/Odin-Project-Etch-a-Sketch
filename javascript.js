const body = document.querySelector('body')
const container = document.querySelector('#container')
const button = document.createElement('button')
let setRed = 128;
let setGreen = 128;
let setBlue = 128;

body.prepend(button);

button.style.position = 'relative';
button.style.left = '50%';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

button.style.width = '100px';
button.style.height = '50px';
button.textContent = "PRESS ME!";

container.style.display = 'flex';
container.style.flexDirection = 'column';

let number = 16;
setGrid(number);

button.addEventListener('click', function() {
    const answer = prompt("Enter a number of squares per side for the new grid (Maximum of 100)");

    if(answer > 100){
        alert("Number entered is above 100, Try Again");
    }
    else if(answer <= 100){
        container.innerHTML = '';
        setDefaultColor();
        setGrid(answer);
    }
});

function setDefaultColor(){
    setRed = 128;
    setGreen = 128;
    setBlue = 128;
}


function setDarkerColor(){
    setRed = setRed - 13;
    setGreen = setGreen - 13;
    setBlue = setBlue - 13;
}

function setGrid(number){
    for (let x=0; x<number; x++){
        
        const divS = document.createElement('div')
        container.appendChild(divS);
        divS.style.display = 'flex';
        
        for(let y=0; y<number; y++){
        const div = document.createElement('div')
        
        divS.appendChild(div);
        div.style.display = 'flex';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.backgroundColor = 'gray';
        div.style.border = '1px solid black';

        div.addEventListener('mouseover', function(){
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255); 

        div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });

        div.addEventListener('mouseout', function(){
            setDarkerColor();
            div.style.backgroundColor = `rgb(${setRed}, ${setGreen}, ${setBlue})`;
        });
        }
    }
}






