class Preloader {
  constructor() {
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      setTimeout(() => {
        gsap.to(".preloader", {
          x: "-100vw",
          ease: "Expo.easeOut",
          delay: "0",
        });

        // swipeAboutme()
      }, 3000);
    }
  }
}
new Preloader();
