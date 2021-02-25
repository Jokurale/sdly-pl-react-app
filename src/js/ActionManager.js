import PageRefsClass from "./PageRefs";
import gsap from "gsap";

export default new (class ActionManager {
  constructor() {
    this.pageRefs = { ...PageRefsClass.refs };
    this.showContactPage = this.showContactPage.bind(this);
    this.hideContactPage = this.hideContactPage.bind(this);

    this.duringAnimation = false;
  }

  showContactPage() {
    if (!this.duringAnimation) {
      this.duringAnimation = true;

      gsap.to(this.pageRefs.contact.current, {
        autoAlpha: 1,
        top: 0,
        ease: "power2.easeIn",
        onComplete: () => {
          this.duringAnimation = false;
        },
      });
    }
  }

  hideContactPage(e) {
    const contact = this.pageRefs.contact.current;
    const tl = new gsap.timeline({
      defaults: { ease: "power2.easeOut" },
      onComplete: () => {
        this.duringAnimation = false;
      },
    });

    if (!this.duringAnimation) {
      this.duringAnimation = true;

      tl.to(contact, {
        top: "100%",
      }).to(contact, {
        autoAlpha: 0,
        delay: 1,
      });
    }
  }
})();
