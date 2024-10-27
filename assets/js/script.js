function toggleMenu() {
    const menu = document.querySelector(".hamburger-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("active");
    icon.classList.toggle("active");
}

function openCV() {
    window.open("./assets/resume/otavio-menezes.pdf");
}