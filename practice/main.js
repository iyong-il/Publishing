const progressBar = document.querySelector(".progress-bar__value");
const animateProgressBar = (progress) => {
  progressBar.style.transform = `scaleY(${progress}) translateX(-50%)`;
};

animateProgressBar(0.4); // 프로그레스 바 시작
