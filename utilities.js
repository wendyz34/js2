function initialize(){
    halloweenText = document.getElementId("colordiv");
    fore = "black";
    back = "orange";

    textWidth = 100;

    textOutput = document.getElementById("textdiv");
    fontSizeOutput = document.getElementById("sizeout");

    fontSize = 24;

    numberOutput = document.getElementById("numout");
    rndNum = 0;

    display();
}
function changeNumber(){
    rndNum = getRandomInteger(1, 10);
    display();
}
/**swap algorithm**/
function toggleColor(){
    /**var local only exist in this function. do display so it shows**/
    var tmp =  fore;
    fore = back;
    back = tmp;

    display(); 
}
function display(){
    halloweenText.style.color = fore;
    halloweenText.style.backgroundColor = back;
    halloweenText.style.width = textWidth + "%";

    fontSizeOutput.innerHTML = fontSize;
    textOutput.style.fontSize = fontSize + "pt";

    numberOutput.innerHTML = rndNum;
}
function changeWidth(w){
    textWidth = w;
    display();
}
function modifyFontSize(mod){
    fontSize += mod;
    if(font < 4) fontSize = 4;

    display();
}
function getRandomInteger(lower, upper){
    //R = parseInt(rnd * (upper-(lower-1)+lower));
    var multiplier = upper - (lower - 1);
    var rand = parseInt(Math.random()*multiplier)+lower;

    return rnd;
}