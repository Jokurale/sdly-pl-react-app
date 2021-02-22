export default class PreloaderHandler {
  constructor(preloaderRef) {
    this.ref = preloaderRef || null;
    this.hidePreloader = this.hidePreloader.bind(this);
  }

  hidePreloader(delay = 0) {
    if (!this.ref) throw ReferenceError("Preloader reference hasn't been set.");

    setTimeout(() => {
      this.ref.current.classList.add("hide");
    }, delay);
  }
}
