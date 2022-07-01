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