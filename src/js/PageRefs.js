import { createRef } from "react";

export default new (class PageRefs {
  constructor() {
    this.refs = {};

    const pageNames = ["contact", "projects", "aboutme"];

    pageNames.forEach((name) => {
      // Reference setup
      this.refs[name] = createRef();

      // Getters setup => get+Name+Ref() => reference to page
      this[
        "get" +
          name.charAt(0).toUpperCase() +
          name.slice(1).toLowerCase() +
          "Ref"
      ] = () => this.refs[name];
    });
  }
})();
