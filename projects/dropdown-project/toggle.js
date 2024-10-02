const toggleBttn = document.getElementsByClassName("fa-bars");
// const checkBlock = document.getElementsByClassName("dropdown");
const dropDown = document.getElementsByClassName("dropdown");

document.addEventListener("click", openMenu);
function openMenu() {
    if (dropDown.style.display === "none" || getComputedStyle(dropDown).display === "none") {
        dropDown.style.display = "block";
    } else {
        dropDown.style.display = "none";
    }

  
}



