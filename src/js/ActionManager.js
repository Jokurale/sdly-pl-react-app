import PageRefsClass from "./PageRefs";
import gsap from "gsap";

export default new (class ActionManager {
  constructor() {
    this.pageRefs = { ...PageRefsClass.refs };

    this.duringAnimation = false;

    this.showPage = this.showPage.bind(this);
    this.hidePage = this.hidePage.bind(this);
  }

  showPage(type) {
    if (!this.duringAnimation) {
      this.duringAnimation = true;

      gsap.to(this.pageRefs[type].current, {
        autoAlpha: 1,
        top: 0,
        ease: "power2.easeInOut",
        onComplete: () => {
          this.duringAnimation = false;
        },
      });
    }
  }

  hidePage(type) {
    const page = this.pageRefs[type].current;
    const tl = new gsap.timeline({
      defaults: { ease: "power2.easeInOut" },
      onComplete: () => {
        this.duringAnimation = false;
      },
    });

    if (!this.duringAnimation) {
      this.duringAnimation = true;

      tl.to(page, {
        top: "120vh",
      }).to(page, {
        autoAlpha: 0,
      });
    }
  }
})();
