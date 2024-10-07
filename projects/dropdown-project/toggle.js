const menu = document.querySelector(".fa-solid fa-bars");
const dropDown = document.querySelector("#dropdownMenu");

function openMenu() {
    dropDown.classList.toggle('show');
}

menu.addEventListener('click', openMenu);

// function openMenu() {
//     if (dropDown.style.display === "none") {
//         dropDown.classList.toggle('show');
//     } else {
//         dropDown.style.display = "block";
//     }
// }

