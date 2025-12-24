const {animate, createTimer, createTimeline , utils, onScroll, spring, irregular, splitText, stagger} = anime;
const debug = false;

// Script de confirmación dinámico
const params = new URLSearchParams(window.location.search);
const invitadoId = params.get('i');

const links = {
  "single": "https://docs.google.com/forms/d/e/1FAIpQLSeLStZJ6yDqPQqf7Tv0HdtA1K3k_FEKHh1EvlmVu8Ke2clO3Q/viewform",
  "double": "https://docs.google.com/forms/d/e/1FAIpQLSf77QQVSI9J-kOh6E9PowjJLpOHoSwgDeUSpM0EuJFjdpMHSQ/viewform",
  "triple": "https://docs.google.com/forms/d/e/1FAIpQLSe6b8s7wkWW8LNn1-5akKgTol2k82VpSMa1uDAz4dQ0VoEMgg/viewform",
  "cuadruple": "https://docs.google.com/forms/d/e/1FAIpQLScCIMkh0smwSvNlFTuizYwC6gQhVv_i3KUPIff3-Q63APW-zA/viewform",
};

const invitados ={
  "b923c465-1d85-488b-9dbb-9a8e4451b934": {
    "names": [
      "Loli",
      "Pablo"
    ]
  },
  "1ac31d9e-f922-4ea1-9711-59ec6622ff57": {
      "names": [
          "Papá Guillermo"
      ]
  },
  "f4336554-48da-434d-b08a-7b5b6ae55c37": {
    "names": [
      "Maru",
      "Ro"
    ]
  },
  "b93a3366-7a0b-4304-9ec5-502e51959b90": {
    "names": [
      "Mamá",
      "Papá"
    ]
  },
  "513e99c9-afae-4f04-a6f1-5609de832095": {
      "names": [
          "Martita"
      ]
  },
  "7aeb10b0-9c06-4cb1-a79e-f791775510ee": {
    "names": [
      "Sabri",
      "Juanchi"
    ]
  },
  "d44e1483-cc76-44ee-b79a-ebf0a943fdcf": {
    "names": [
      "Dante",
      "Rocio"
    ]
  },
  "1b97245a-530b-40d3-be2a-9cb26e1169b1": {
    "names": [
      "Mica",
      "Agus",
      "Ambi",
      "Galo"
    ]
  },
  "2437e50c-a281-4ae8-94c8-7c3c6c24a7ff": {
    "names": [
      "Fran",
      "Dian"
    ]
  },
  "c283037d-bc68-412d-8b64-930c988f27f9": {
    "names": [
      "Facu",
      "Ro"
    ]
  },
  "8e89f78f-4d05-4a81-80e5-67199c96ee38": {
    "names": [
      "Clau",
      "Dana",
      "Lolo"
    ]
  },
  "1dd80e72-bc0f-46c6-b4e3-6689db7aab73": {
    "names": [
      "Mili",
      "Joaquin"
    ]
  },
  "41565088-54be-4178-94ce-205caedfd24e": {
      "names": [
          "Tía Susi",
          "Fabio"
      ]
  },
  "c786ae2d-5fcc-4e7c-a868-8598743a8bd0": {
    "names": [
      "Tía Mirta",
      "Tío Roberto"
    ]
  },
  "51e95d60-8a18-48c2-af62-b8838c09c7c6": {
    "names": [
      "Tío Hugo",
      "Tía Rulo"
    ]
  },
  "3d45e6ed-a7e1-4b40-b2d9-437e02cb3ac2": {
    "names": [
      "Tía Sonia"
    ]
  },
  "0a0b1b97-70ac-450d-bdab-518bd3612840": {
      "names": [
          "Graciela"
      ]
  },
  "b4780979-bf31-49a8-a461-4911c3e0f9f2": {
      "names": [
          "Romi"
      ]
  },
  "d140d763-51ef-4429-9cc7-f6ce28dd5b94": {
      "names": [
          "Dai"
      ]
  },
  "4aa8c94e-9f56-4338-84b3-bb9564fcae23": {
      "names": [
          "Flor"
      ]
  },
  "2f1a96c4-b2e2-4dcc-90e4-8e158c160567": {
      "names": [
          "Juli"
      ]
  },
  "9d20c8b4-fd62-4369-87e4-0c850a07be59": {
      "names": [
          "Yami"
      ]
  },
  "b0896e8f-a7e2-4eba-803b-047a41bf4506": {
    "names": [
      "Marina",
      "Martín"
    ]
  },
  "baa27613-6a8f-402c-b933-87eed286f99f": {
      "names": [
          "Cin"
      ]
  },
  "2fafee73-8e70-4a26-93cc-258be66ff5b6": {
      "names": [
          "Guille"
      ]
  },
  "9a29c179-5ac9-4c1f-86df-13db4788ded7": {
      "names": [
          "Jor"
      ]
  },
  "fd9e72d0-e9a9-4246-9255-e35d14b25436": {
      "names": [
          "Adri"
      ]
  },
  "6f25928a-243f-4c18-a0dc-cad87e583a27": {
      "names": [
          "Anita"
      ]
  },
  "90bd9dae-847a-4aeb-9679-ac973bcf7918": {
      "names": [
          "Nati"
      ]
  },
  "ae5f0055-1830-4414-a2cd-16cfc5012a6f": {
      "names": [
          "Silvia"
      ]
  },
  "b746c91c-77c5-4329-b0bc-8a305477bf16": {
      "names": [
          "Mile"
      ]
  },
  "0ba4ee3d-d7ae-4680-8999-13a50296ce5a": {
      "names": [
          "Lauri"
      ]
  },
  "da3ca28e-7091-4de8-84bf-4f6a1220d7f6": {
      "names": [
          "Mica"
      ]
  },
  "cf7b1448-c43b-4b42-bb37-c2717932dd98": {
      "names": [
          "Fany"
      ]
  },
  "45d1ba95-af6c-45ec-8ae8-41c9f70aaa9b": {
      "names": [
          "Yani"
      ]
  },
  "1b1d93b1-17d8-4245-b481-05611afd88dc": {
      "names": [
          "Gabi"
      ]
  },
  "d03a48bd-8c74-4fb9-9961-f3528b38dff2": {
    "names": [
      "Juanjo",
      "Blanqui"
    ]
  },
  "7750a12f-ee9e-4914-aff2-3554d2580978": {
    "names": [
      "Cami",
      "Fiami",
      "Bebesita"
    ]
  },
  "c1e20e62-7d45-4870-b887-8c183b358525": {
    "names": [
      "Lea",
      "Mel"
    ]
  },
  "7e7d07a5-8b18-43fe-b2cd-9a7ee6d88944": {
    "names": [
      "Gino",
      "Juli"
    ]
  },
  "27bd1f97-c103-4a45-b7ee-2f74f23d7c53": {
    "names": [
      "Marian",
      "Dai"
    ]
  },
  "9daed6fd-9f53-48c4-b63d-bb54600d0332": {
      "names": [
          "Arian"
      ]
  },
  "08352c95-89ed-47e5-a445-585cd57b0041": {
      "names": [
          "Pao"
      ]
  },
  "8fe1f315-9c6b-4d73-b72d-75d2d71fa8fc": {
      "names": [
          "Lei"
      ]
  },
  "8b47c242-1124-4577-a322-550986588a91": {
    "names": [
      "Dani",
      "Elsa"
    ]
  },
  "0954fa96-ad85-4f37-9732-dd6af8416d75": {
    "names": [
      "Sol",
      "Agustin",
      "Hector",
      "Adriana",
      "Isa"
    ]
  },
  "78fd22c4-4554-4f8b-8d69-ce1e25be4ae3": {
    "names": [
      "Javi",
      "Maca"
    ]
  },
  "6a4f5840-aa75-42cd-a24d-88fefba973d6": {
      "names": [
          "Melli Juan"
      ]
  },
  "b919086c-bec8-48fa-bd4c-6499f245448b": {
    "names": [
      "Melli Gordo",
      "Vane"
    ]
  },
  "3c3a1fd4-d705-4862-8414-e31f88e51de4": {
    "names": [
      "Ruben",
      "Lu"
    ]
  },
  "d2f3a4b5-6c78-4d90-8e12-3f4567890abc": {
    "names": [
      "Clau"
    ]
  },
  "f1e2d3c4-b5a6-4f78-9e01-2a3456789bcd": {
    "names": [
      "Evi"
    ]
  }
}

const invitado = invitados[invitadoId];
if (invitado) {
  let names = invitado['names'];
  const cantInvitados = names.length;
  let invitadosText = "";
  if(cantInvitados === 1){
    invitadosText = names[0];
  }
  if(cantInvitados === 2){
    invitadosText = names.join(" y ");
  }
  if(cantInvitados > 2){
    invitadosText = names.slice(0, names.length - 1).join(", ") + " y " + names[names.length - 1];
  }
  document.getElementById("invitados").innerText = invitadosText;
  document.getElementById("saludo").innerText = cantInvitados > 1 ? "Los invitamos" : "Te invitamos";
  document.getElementById("saludo2").innerText = cantInvitados > 1 ? "Los" : "Te";

  switch (cantInvitados) {
    case 1:
      document.getElementById("confirm").href = links["single"] + `?entry.1498135098=${encodeURIComponent(names[0])}`;
      break;
    case 2:
      document.getElementById("confirm").href = links["double"] + `?entry.1498135098=${encodeURIComponent(names[0])}&entry.1138544184=${encodeURIComponent(names[1])}`;
      break;
    case 3:
      document.getElementById("confirm").href = links["triple"] + `?entry.1498135098=${encodeURIComponent(names[0])}&entry.1138544184=${encodeURIComponent(names[1])}&entry.1169104318=${encodeURIComponent(names[2])}`;
      break;
    case 4:
      document.getElementById("confirm").href = links["cuadruple"] + `?entry.1498135098=${encodeURIComponent(names[0])}&entry.1138544184=${encodeURIComponent(names[1])}&entry.1169104318=${encodeURIComponent(names[2])}&entry.1719475276=${encodeURIComponent(names[3])}`;
      break;
    default:
      break;
  }
}

// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.primary-text, #nos-casamos');
textWrapper.forEach(text => {
  text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

const primaryTextAnimation = {
  x: ['-14px', 0],
  filter: ['blur(16px)', 'blur(0px)'],
  duration: 2000,
  delay: (el, i) => Math.random() * 1000
};

const secondaryTextAnimation = {
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 300,
  delay: (el, i) => 500 + 30 * i
};

const onScrollSettings = {
  container: '.scroller',
  repeat: true,
  sync: 'play reset',
  debug 
}

// Common animations
for (let index = 1; index < 5; index++) {
  animate(`#section${index} .primary-text .letter`, {
    ...primaryTextAnimation,
    autoplay: onScroll({...onScrollSettings, target: `#section${index} .primary-text`}),
  });

  splitText(`#section${index} .secondary-text`, {
    chars: { wrap: 'clip' },
  })
  .addEffect(({ chars }) => animate(chars, {
    ...secondaryTextAnimation,
    autoplay: onScroll({...onScrollSettings, target: `#section${index} .secondary-text`}),
  }));

  animate(`#section${index} .ring-title`, {
    opacity: [0,1],
    filter: ['blur(16px)', 'blur(0px)'],
    scale: [0.8, 1],
    easing: "easeOutExpo",
    duration: 1000,
    autoplay: onScroll({...onScrollSettings}),
  });
}

// Background animations
animate('#hoja-top', {
  translateX: [-5, 0],
  translateY: [160, 0],
  duration: 1000,
  autoplay: onScroll({...onScrollSettings, sync: 'play reverse', target: `#section1`}),
});

animate('#hoja-top-2', {
  translateX: [160, 0],
  translateY: [160, 0],
  opacity: [0, 1],
  duration: 1000,
  autoplay: onScroll({...onScrollSettings, sync: 'reverse play', target: `#section1`}),
});

animate('#hoja-bottom', {
  translateX: [10, 0],
  translateY: [30, 0],
  duration: 1000,
  autoplay: onScroll({...onScrollSettings, sync: 'play reverse', target: `#section1`}),
});

animate('#flores-top', {
  translateX: [-10, -10],
  translateY: [-80, -10],
  scale: [0.9, 1],
  duration: 1000,
  autoplay: onScroll({...onScrollSettings, sync: 'play reverse', target: `#section1`}),
});

animate('#flores-bottom', {
  translateX: [-10, 0],
  translateY: [-60, 10],
  scale: [1, 1.2],
  duration: 1000,
  autoplay: onScroll({...onScrollSettings, sync: 'play reverse', target: `#section1`}),
});

// Section 1 animations
animate('#section1', {
  translateY: [0, -200, 0],
  duration: 3000,
  easing: 'easeInElastic',
  loop: 1,
  delay: 2500,
  autoplay: true,
});

animate('#bottom-arrow', {
  // translateY: [0, 200, 0],
  opacity: [0, 1, 0],
  scale: [1, 1.4, 1],
  duration: 1500,
  easing: 'easeInElastic',
  loop: 6,
  delay: 1500,
  autoplay: true,
});

animate('#nos-casamos .letter', {
  scale: [0,1],
  opacity: [0,1],
  translateZ: 0,
  ease: spring({
    bounce: 0.65,
    duration: 400
  }),
  duration: 500,
  delay: (el, i) => 70*i,
  autoplay: onScroll({...onScrollSettings, target: `#nos-casamos`}),
});

animate('#mariposa1', {
  translateX: [10, 0],
  translateY: [-100, 0],
  duration: 1000,
  autoplay: onScroll({...onScrollSettings, sync: 'play reverse', target: `#section1`}),
});

animate('#mariposa2', {
  translateX: [-50, 0],
  translateY: [-20, 0],
  duration: 1000,
  autoplay: onScroll({...onScrollSettings, sync: 'play reverse', target: `#section1`}),
});

// Section 2 animations
animate(`#section2 .divider`, {
  scaleY: [0,1],
  opacity: [0.5,1],
  easing: "easeOutExpo",
  duration: 700,
  delay: 500,
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
});

splitText('#invitados', {
  words: { wrap: 'clip' },
})
.addEffect(({ words }) => animate(words, {
  y: [
    { to: ['100%', '0%'] },
  ],
  opacity: [0,1],
  duration: 750,
  ease: 'out(3)',
  delay: stagger(500),
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
}));

splitText('#month', {
  lines: { wrap: 'clip' },
})
.addEffect(({ lines }) => animate(lines, {
  y: ['-100%', '0%'],
  duration: 750,
  ease: 'inOutElastic',
  delay: 500,
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
}));

splitText('#year', {
  lines: { wrap: 'clip' },
})
.addEffect(({ lines }) => animate(lines, {
  y: ['100%', '0%'],
  duration: 750,
  ease: 'inOutElastic',
  delay: 500,
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
}));

splitText('#weekday', {
  lines: { wrap: 'clip' },
})
.addEffect(({ lines }) => animate(lines, {
  x: ['-100%', '0%'],
  duration: 750,
  ease: 'inOutElastic',
  delay: 500,
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
}));

splitText('#hour', {
  lines: { wrap: 'clip' },
})
.addEffect(({ lines }) => animate(lines, {
  x: ['100%', '0%'],
  duration: 750,
  ease: 'inOutElastic',
  delay: 1000,
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
}));

splitText('#day', {
  lines: { wrap: 'clip' },
})
.addEffect(({ lines }) => animate(lines, {
  scale: ['0%', '100%'],
  duration: 750,
  ease: spring({
    bounce: 0.65,
    duration: 400
  }),
  delay: 1000,
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
}));

animate('#countdown', {
  opacity: [0,1],
  duration: 750,
  delay: 1500,
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
});

// Section 3 animations
for (let index = 1; index <= 3; index++) {
  const dividerAnimation = animate(`#item${index} .divider`, {
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  });
  
  const tl = createTimeline({
    autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
    delay: (el, i) => 200*i,
  })
  .sync(dividerAnimation)
  .add(`#item${index} .divider`, {
    translateX: [document.querySelector(`#item${index} .list-text`).getBoundingClientRect().width + 10, 0],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  })
  .add(`#item${index} .list-text`, {
    opacity: [0,1],
    filter: ['blur(16px)', 'blur(0px)'],
    easing: "easeOutExpo",
    duration: 600,
  })
  .add(`#item${index} .icon`, {
    scale: [0,1],
    ease: spring({
      bounce: 0.65,
      duration: 400
    }),
    duration: 600,
    alternate :true,
    loop: index === 1,
  });
}

// Section 4 animations

animate(`#gift1`, {
  scale: [0,1],
  opacity: [0.5,1],
  ease: spring({
    bounce: 0.65,
    duration: 400
  }),
  duration: 700,
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
});
animate(`#gift2`, {
  scale: [0,1],
  opacity: [0.5,1],
  ease: spring({
    bounce: 0.65,
    duration: 400
  }),
  duration: 700,
  delay: 500,
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
});

createTimeline({
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
  delay: 3000,
})
.sync(animate('#alias', {
  opacity: [0,1],
  duration: 750,
  delay: 1500,
  // autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
}))
.add('#alias span', {
  opacity: [0,1],
  duration: 750,
  delay: 1500,
  delay: 100
})

animate(`#confirm`, {
  scale: [0,1],
  opacity: [0.5,1],
  ease: spring({
    bounce: 0.65,
    duration: 400
  }),
  duration: 700,
  delay: 500,
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
});

animate(`#last-text`, {
  scale: [3,1],
  opacity: [0,1],
  easing: "easeOutCirc",
  duration: 800,
  delay: 1500,
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
});