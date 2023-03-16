// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.SemiCircle(container, {
  strokeWidth: 5.75,
  easing: "easeInOut",
  duration: 1400,
  color: "#FF5000",
  trailColor: "#ddd",
  trailWidth: 5.75,
  svgStyle: null,
});

var bar2 = new ProgressBar.SemiCircle(container2, {
  strokeWidth: 8,
  easing: "easeInOut",
  duration: 1400,
  color: "#00a7e1",
  trailColor: "#ddd",
  trailWidth: 8,
  svgStyle: null,
});
bar.animate(0.9);
bar2.animate(0.5); // Number from 0.0 to 1.0
