const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    if (offset > 132) {
        nav.classList.add("down");
    } else {
        nav.classList.remove("down");
    }
})