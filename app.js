AOS.init({
    duration: 1000,
    once: true
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