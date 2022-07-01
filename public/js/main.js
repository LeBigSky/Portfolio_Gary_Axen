// const noncroc = document.getElementById("crackers");
// const croc = document.getElementById("croc");

// noncroc.addEventListener("mouseover", ()=> {
// noncroc.style.display = 'none';
// croc.style.display = 'block';
// });

const navover = document.getElementById("navover");
const showlevel = document.getElementById("navoverdev");

console.log(navover);
navover.addEventListener("mouseover", ()=> {
    showlevel.style.display = 'block';
});

navover.addEventListener("mouseout", ()=> {
    showlevel.style.display = 'none';
});


function refreshTime() {
    const date = new Date();
    const timenow = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    const timeDisplay = document.getElementById("timer");
    const dateString = timenow.toLocaleString();
    const formattedString = dateString.replace(" - ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 1000);

const messDisplay = document.getElementById("message");
messDisplay.textContent = "BUSY WITH JAVASCRIPT"