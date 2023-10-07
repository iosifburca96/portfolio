const nav = document.getElementById('header');

window.onscroll = function () {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition >= 140) {
        nav.classList.add("colored-header");
    } else {
        nav.classList.remove("colored-header");
    }
};