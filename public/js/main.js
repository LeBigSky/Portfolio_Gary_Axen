
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

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const datenow = new Date();
const daily = datenow.getDay();
const timenow = datenow.getHours();

console.log(daily);

if (daily <= 5 && timenow > 9-12 && timenow < 13-17) {
    result = "Improving my coding skills";    
}
else if (daily <= 5 && timenow == 12-13)
{
    result = " Sorry, out for lunch now"
}
else if (daily <= 5 && timenow > 17 && timenow < 18){
    result = "On my way home"
}
else if (daily <= 5 && timenow > 18 && timenow < 20){
    result = "Only open for family Business..."
}
else if (daily <= 5 && timenow > 20 && timenow < 22){
     result = "On a personal meeting with my Xbox"
}
else{
    result = "On weekend now"
}
var weekmessage = result;
// console.log(weekmessage);
const messDisplay = document.getElementById("message");
messDisplay.textContent = weekmessage;