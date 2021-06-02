import appConfig from "../Config";

const { enabled, delay } = appConfig.preloader;

export default class PreloaderHandler {
  constructor(preloaderRef) {
    this.ref = preloaderRef || null;
    this.hidePreloader = this.hidePreloader.bind(this);
    this.dispatchReady = this.dispatchReady.bind(this);

    this.dispatchedAmount = 0;
  }

  dispatchReady() {
    this.dispatchedAmount++;

    if (this.dispatchedAmount >= 4) {
      this.hidePreloader(delay);
    }
  }

  hidePreloader(delay = 0) {
    if (!this.ref) throw Error("Preloader reference hasn't been set.");

    if (!enabled) delay = 0;

    setTimeout(() => {
      this.ref.current.classList.add("hide");
    }, delay);
  }
}
