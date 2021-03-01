import appConfig from "./Config";

const { preloader, view } = appConfig;

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
