import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

// Connect to Real-time servers
const socket = io("wss://LifeLabsProject-Real-time.skywarspro15.repl.co");
var lastCount = 0;

socket.on("connect", () => {
  socket.emit("ONLINEUSERS");
});

// Update user stats
socket.on("USERCOUNT", (arg) => {
  var count = parseInt(arg);
  if (count > lastCount) {
    document.getElementById("onlineUsers").style.animation =
      "countingUp 0.5s cubic-bezier(0.65, 0.05, 0.36, 1)";
    setTimeout(function () {
      document.getElementById("onlineUsers").innerHTML = arg + " users online";
    }, 200);
    setTimeout(function () {
      document.getElementById("onlineUsers").style.animation = "none";
    }, 500);
  } else if (count < lastCount) {
    document.getElementById("onlineUsers").style.animation =
      "countingDown 0.5s cubic-bezier(0.65, 0.05, 0.36, 1)";
    setTimeout(function () {
      document.getElementById("onlineUsers").innerHTML = arg + " users online";
    }, 200);
    setTimeout(function () {
      document.getElementById("onlineUsers").style.animation = "none";
    }, 500);
  }
  lastCount = count;
});
