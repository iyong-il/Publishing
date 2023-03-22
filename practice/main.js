var chi = document.getElementById("merong");
var chet = chi.getContext("2d");

chet.beginPath();
chet.strokeStyle = "#ff5000";
chet.lineWidth = 8;
chet.arc(170, 200, 152, 0, Math.PI, true);
chet.stroke();

chet.beginPath();
chet.strokeStyle = "#ddd";
chet.lineWidth = 8;
chet.arc(170, 200, 152, 0, -0.5 * Math.PI, true);
chet.stroke();

chet.beginPath();
chet.strokeStyle = "#00a7e1";
chet.lineWidth = 8;
chet.arc(170, 200, 140, 0, Math.PI, true);
chet.stroke();

chet.beginPath();
chet.strokeStyle = "#ddd";
chet.lineWidth = 8;
chet.arc(170, 200, 140, 0, -0.4 * Math.PI, true);
chet.stroke();
