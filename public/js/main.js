
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

// FONCTION AFFICHAGE DE L'HEURE 
function refreshTime() {
    const date = new Date();
    const timenow = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    const timeDisplay = document.getElementById("timer");
    const dateString = timenow.toLocaleString();
    const formattedString = dateString.replace(" - ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 1000);
// FONCTION MESSAGE RELATIF A L'HEURE
const messDisplay = document.getElementById("message");
messDisplay.textContent = "BUSY WITH JAVASCRIPT"