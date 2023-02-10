const toggleMenuBtn = document.getElementById("toggle-btn");
const navLinks = document.getElementsByClassName("nav-links")[0];

toggleMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})