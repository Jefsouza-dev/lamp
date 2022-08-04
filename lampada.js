const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lampIsBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!lampIsBroken () ){
        lamp.src = './img/ligada.jpeg';
    }    
}


function lampOff () {
    if (!lampIsBroken () ){
        lamp.src = './img/desligada.jpeg';
    }
        
     
}

function lampBroken () {
    lamp.src = './img/quebrada.jpeg';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);