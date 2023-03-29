var semiCircle = document.getElementById("semiCircle1");
var chet = semiCircle.getContext("2d");

// 큰원
chet.beginPath();
chet.strokeStyle = "#ddd";
chet.lineWidth = 8;
chet.arc(350, 250, 140, 0, Math.PI, true);
chet.stroke();

chet.beginPath();
chet.strokeStyle = "#ff5000";
chet.lineWidth = 8;
chet.arc(350, 250, 140, -0.3, Math.PI, true);
chet.stroke();

// 작은원
chet.beginPath();
chet.strokeStyle = "#ddd";
chet.lineWidth = 8;
chet.arc(350, 250, 125, 0, Math.PI, true);
chet.stroke();

chet.beginPath();
chet.strokeStyle = "#00a7e1";
chet.fillStyle = "#ff5000";
chet.lineWidth = 8;
chet.arc(350, 250, 125, -0.5, Math.PI, true);
chet.stroke();

function animate() {
  // 1) 함수가 실행될 때마다 화면 초기화(canvas의 너비와 높이 만큼 지움)
  chet.clearRect(0, 0, semiCircle.width, semiCircle.height);
}

// 5. 애니메이션 함수를 50ms 간격으로 반복 호출
setInterval(animate, 1000000000);
