
// DISPLAY DES NAV HOVER 
const navover = document.getElementById("navover");
const showlevel = document.getElementById("navoverdev");

navover.addEventListener("mouseover", ()=> {
    showlevel.style.display = 'block';
});

navover.addEventListener("mouseout", ()=> {
    showlevel.style.display = 'none';
});

var logoblanc = document.getElementsByClassName("logo1")[0];
var divlogo = document.getElementsByClassName("logos")[0];
var logobleu = document.getElementsByClassName("logo2")[0];

divlogo.addEventListener("mouseover", ()=> {
    logoblanc.style.display = 'none';
    logobleu.style.display = 'block';
    
});
divlogo.addEventListener("mouseout", ()=> {
    logobleu.style.display = 'none';
    logoblanc.style.display = 'block';
});

// FONCTION APPARITION LOGO & DISPARITION ANIMATION

function appear(){
    logoblanc.style.opacity = 1;
}
a = setInterval(appear, 2600);

const spot= document.getElementsByClassName("spotlogo")[0];

function disappear(){
    spot.style.display = 'none';
}
x = setInterval(disappear, 2600);



// FONCTION AFFICHAGE DE L'HEURE 
function refreshTime() {
    const date = new Date();
    const timenow = date.getHours() + ' ' + date.getMinutes();
    const timeDisplay = document.getElementById("timer");
    const dateString = timenow.toLocaleString();
    const formattedString = dateString.replace(" - ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 1000);




// FONCTION MESSAGE RELATIF A L'HEURE
// const messDisplay = document.getElementById("message");
// messDisplay.textContent = weekmessage;



let datenow = new Date();
let daily = datenow.getDay();
let timenow = datenow.getHours();


console.log(daily)
console.log(timenow)

if (daily <= 5 && timenow >= 9 && timenow < 17) {
    result = "Improving my skills";    
}
else if (daily <= 5 && timenow >= 12 && timenow < 13)
{
    result = " Sorry, out for lunch now"
}
else if (daily <= 5 && timenow == 17){
    result = "On my way home"
}
else if (daily <= 5 && timenow >= 18 && timenow < 20){
    result = "Open (for family Business)"
}
else if (daily <= 5 && timenow >= 20 && timenow < 22){
     result = "On meeting (with my Xbox)"
}
else{
    result = "It's weekend now !"
}
var weekmessage = result;
// console.log(weekmessage);
const messDisplay = document.getElementById("message");
messDisplay.textContent = weekmessage;