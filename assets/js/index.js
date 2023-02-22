$(function () {
  let code = findUniCode("fa fa-car");
  setTimeout(() => {
    drawCanvas(code);
  }, 3000);
});

// this function find and returning unicode of the i
function findUniCode(name) {
  let testI = document.createElement("i");

  testI.className = name;
  document.body.appendChild(testI);

  let char = window
    .getComputedStyle(testI, ":before")
    .content.replace(/'|"/g, "");

  testI.remove();
  return "\\u" + char.charCodeAt(0).toString(16);
}

function drawCanvas(code) {
//   code = "\uF064";
  let canvas = document.getElementById("canvas");
  // canvas.width = 100;
  // canvas.height = 100;
  let ctx = canvas.getContext("2d");
  // ctx.clearRect(0, 0, 100, 100);

  // ctx.textAlign = "center";
  ctx.font = "48px FontAwesome";
  // ctx.textBaseline = "middle";

  // ctx.fillStyle = "white";
  ctx.fillText(code, 20, 75);
}
