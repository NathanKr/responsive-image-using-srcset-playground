window.addEventListener("resize", resizeHandler);
resizeHandler();
function resizeHandler() {
  elemOutput = document.querySelector("output");
  elemOutput.innerText = `Window Width : ${window.innerWidth} [pixels], Device Pixel Ratio : ${window.devicePixelRatio}`;
}