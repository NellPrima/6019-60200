const aMenu = document.getElementById("aMenu");
const menuBttn = document.getElementById("menu_bttn");
const button = document.getElementById("button");


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

 button.addEventListener("click", function () {
     const computedStyle = window.getComputedStyle(aMenu);
     if (computedStyle.visibility === "hidden") {
         openMenu();
     }

     else if (computedStyle.visibility === "visible") {
         closeMenu();
     }

 });
