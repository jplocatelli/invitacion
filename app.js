AOS.init({
    duration: 1000,
    mirror: true,
});

// Script de confirmación dinámico
const params = new URLSearchParams(window.location.search);
const invitado = params.get('i');

const links = {
    "ana-pablo": "https://forms.gle/XXXX",
    "familia-lopez": "https://forms.gle/YYYY"
};

if (links[invitado]) {
    document.getElementById("confirmar").href = links[invitado];
} else {
    document.getElementById("confirmar").style.display = "none";
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.aos-init.aos-animate[data-aos="primary-text"]');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.aos-init.aos-animate[data-aos="primary-text"] .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.aos-init.aos-animate[data-aos="primary-text"] .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });