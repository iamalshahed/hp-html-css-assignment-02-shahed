const bar = document.getElementById("menubar");
const nav = document.getElementById("navmenu");
const closenav = document.getElementById("closenav");


// open navbar
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("opennav");
  });
}


// close navbar
if (closenav) {
    closenav.addEventListener("click", () => {
    nav.classList.remove("opennav");
  });
}
