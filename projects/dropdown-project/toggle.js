const aMenu = document.getElementById("aMenu");
const secondBttn = document.querySelector(".fa-bars");


function openMenu() {
    const computedStyle = window.getComputedStyle(aMenu);
    if ( computedStyle.visibility === "hidden") {
        aMenu.style.visibility = "visible";
    } 

}

 function closeMenu() {
    const computedStyle = window.getComputedStyle(aMenu);
    if ( computedStyle.visibility === "visible") {
        aMenu.style.visibility = "hidden";
    } 
}

 secondBttn.addEventListener("click", function () {
     const computedStyle = window.getComputedStyle(aMenu);
     if (computedStyle.visibility === "hidden") {
         openMenu();
     }
     else if (computedStyle.visibility === "visible") {
         closeMenu();
     }
 });
