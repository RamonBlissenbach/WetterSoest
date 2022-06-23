// >>>Menue Open/Close<<<

window.onload = async function () {
    if(localStorage.getItem("Darkmode") == 1) {
        DarkOn();
    }
}

function OpenMen() {
    document.getElementById("Menue").style ="display:block";
    document.getElementById("OpenMenue").setAttribute("onclick", "CloseMen()");
    console.log("Open");
    if(localStorage.getItem("Darkmode") ==1 ){
        document.getElementById("Menue").style.background = "rgb(88, 88, 88)";
    }
}
function CloseMen() {
    document.getElementById("Menue").style ="display:none";
    document.getElementById("OpenMenue").setAttribute("onclick", "OpenMen()");
    console.log("Closed");
}

//>>>Darkmode On/Off<<<



function DarkOn() {
    document.body.style.background = "url(Resource/Background/Nacht.jpg)";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    elements = document.getElementsByClassName("boxstyle");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="rgb(88, 88, 88)";
    }
    elements = document.getElementsByClassName("MenItem");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="rgb(88, 88, 88)";
    }
    document.body.style.color ="white";
    elements = document.getElementsByTagName("a");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color="rgb(255, 255, 255)";
    }
    document.getElementById("DarkmodeBtn").innerHTML = "Darkmode: An";
    document.getElementById("DarkmodeBtn").setAttribute("onclick", "DarkOff()");
    localStorage.setItem("Darkmode", 1);
}

function DarkOff() {
    document.body.style.background = "url(Resource/Background/Tag.jpg)";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    elements = document.getElementsByClassName("boxstyle");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="rgb(170, 255, 200)";
    }
    elements = document.getElementsByClassName("MenItem");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="rgb(170, 255, 200)";
    }
    document.body.style.color ="black";
    elements = document.getElementsByTagName("a");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color="rgb(0, 0, 0)";
    }
    document.getElementById("DarkmodeBtn").innerHTML = "Darkmode: Aus";
    document.getElementById("DarkmodeBtn").setAttribute("onclick", "DarkOn()");
    localStorage.setItem("Darkmode", 0);
}

var bal = 2;
if(bal == 2){
    DarkOn();
}


