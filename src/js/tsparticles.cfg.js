import decor1 from "../svgs/decor1.svg";
import decor2 from "../svgs/decor2.svg";
import decor3 from "../svgs/decor3.svg";
import decor4 from "../svgs/decor4.svg";
import decor7 from "../svgs/decor7.svg";

const images = [
  {
    src: decor1,
    width: 32,
    height: 32,
  },
  {
    src: decor2,
    width: 32,
    height: 32,
  },
  {
    src: decor3,
    width: 32,
    height: 32,
  },
  {
    src: decor4,
    width: 32,
    height: 32,
  },
  {
    src: decor7,
    width: 32,
    height: 32,
  },
];

const config = {
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onDiv: {
        elementId: "repulse-div",
        enable: false,
        mode: "repulse",
      },
      onHover: {
        enable: false,
        mode: "bubble",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 1,
        size: 40,
        speed: 3,
      },
      connect: {
        distance: 80,
        lineLinked: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    lineLinked: {
      blink: false,
      color: "#000",
      consent: false,
      distance: 150,
      enable: false,
      opacity: 0,
      width: 0,
    },
    rotate: {
      value: 0,
      random: true,
      direction: "clockwise",
      animation: {
        enable: true,
        speed: 4,
        sync: false,
      },
    },
    move: {
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      limit: 0,
      value: 10,
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 1,
        sync: false,
      },
      random: false,
      value: 0.8,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      image: images,
      polygon: {
        nb_sides: 5,
      },
      stroke: {
        color: "#000000",
        width: 0,
      },
      type: "image",
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: false,
      value: 16,
    },
  },
  polygon: {
    draw: {
      enable: false,
      lineColor: "#ffffff",
      lineWidth: 0.5,
    },
    move: {
      radius: 10,
    },
    scale: 1,
    type: "none",
    url: "",
  },
};

export default config;
