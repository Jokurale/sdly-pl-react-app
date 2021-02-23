import appConfig from "./Config";

// Here destruct your config object
const { preloader, view } = appConfig;

// Here setup any neccessery debug logs or configurations
if (!preloader.enabled) {
  console.warn("Preloader is disabled.");
}

if (!view.responsive) {
  console.warn(
    "App is running in unresponsive-mode [Responsive breakpoints are disbled]"
  );
} else {
  import("./Responsive.scss");
}
