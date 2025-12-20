const {animate, createTimer, createTimeline , utils, onScroll} = anime;
const debug = true;

// Script de confirmación dinámico
const params = new URLSearchParams(window.location.search);
const invitado = params.get('i');

const links = {
    "ana-pablo": "https://forms.gle/XXXX",
    "familia-lopez": "https://forms.gle/YYYY"
};

if (links[invitado]) {
    document.getElementById("confirm").href = links[invitado];
}

// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.primary-text');
textWrapper.forEach(text => {
  text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

const primaryTextAnimation = {
  x: ['-14px', 0],
  filter: ['blur(16px)', 'blur(0px)'],
  duration: 1000,
  delay: (el, i) => Math.random() * 500
};

const onScrollSettings = {
  container: '.scroller',
  repeat: true,
  sync: 'play reset',
  debug 
}

for (let index = 1; index < 5; index++) {
  animate(`#section${index} .primary-text .letter`, {
    ...primaryTextAnimation,
    autoplay: onScroll({...onScrollSettings, target: `#section${index} .primary-text`}),
  });
}

// timeline({loop: false})
//   .add({
//     targets: '.primary-text .letter',
//     filter: ['blur(16px)', 'blur(0px)'],
//     translateX: [-40,0],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 2000,
//     delay: (el, i) => Math.random() * 1000
//   })
//   // .add({
//   //   targets: '.primary-text .letter',
//   //   translateX: [0,-30],
//   //   opacity: [1,0],
//   //   easing: "easeInExpo",
//   //   duration: 1100,
//   //   delay: (el, i) => 100 + 30 * i
//   // });