function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener('click', function() {
    var audio = document.getElementById('background-music');
    audio.play();
});
const typed = new Typed('.section_text_p2', {
    strings: ['Aspiring Software Developer',' Professional Footballer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });