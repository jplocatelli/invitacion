const {animate, createTimer, createTimeline , utils, onScroll, spring, irregular, splitText, stagger} = anime;
const debug = false;

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
var textWrapper = document.querySelectorAll('.primary-text, #nos-casamos, .secondary-text');
textWrapper.forEach(text => {
  text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

const primaryTextAnimation = {
  x: ['-14px', 0],
  filter: ['blur(16px)', 'blur(0px)'],
  duration: 3000,
  delay: (el, i) => Math.random() * 1000
};

const secondaryTextAnimation = {
  translateX: [40,0],
  translateZ: 0,
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1200,
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
  animate(`#section${index} .secondary-text .letter`, {
    ...secondaryTextAnimation,
    autoplay: onScroll({...onScrollSettings, target: `#section${index} .secondary-text`}),
  });
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
  delay: 1500,
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
  delay: 1000,
  autoplay: onScroll({...onScrollSettings, sync: 'play reset'}),
});

// Section 3 animations


// Section 4 animations