let src = "\uf015";
let size = 50;
let color = "black";

let canvasHeight = 50;
let canvasWidth = 50;

$(function () {
  // I need this because when I want to print icon to canvas it do not print in first time.
  initilizeCanvas();
});

function initilizeCanvas() {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      drawCanvas();
    }, 1);
  }
}

function findUniCode(name) {
  let testI = document.createElement("i");

  testI.className = name;
  document.body.appendChild(testI);

  let char = window.getComputedStyle(testI, ":before").content;
  testI.remove();

  console.log("\\u" + char.charCodeAt(1).toString(16));

  return "\\u" + char.charCodeAt(1).toString(16);
}

function drawCanvas() {
  let canvas = document.getElementById("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ctx.textAlign = "center";
  ctx.font = size + "px FontAwesome";
  ctx.fillStyle = color;
  // ctx.textBaseline = "middle";

  ctx.fillText(src, 0, size);
}

function changeSource() {
  src = $("#main > div.sourceContainer > input").val();

  if (src.length == 4) {
    src = String.fromCharCode(parseInt(src, 16));
    drawCanvas(src);
  }
}

function changeColor() {
  color = $("#main > div.colorContainer > input[type=color]").val();
  drawCanvas();
}

function changeSize() {
  size = $("#main > div.sizeContainer > input[type=range]").val();
  // console.log("size girildi", size);

  //   update output
  $("#main > div.sizeContainer > span.result").html(`${size}px`);

  drawCanvas();
}

function changeCanvasHeight() {
  canvasHeight = $(
    "#main > div.canvasHeightContainer > input[type=range]"
  ).val();
  // console.log("size girildi", size);

  //   update output
  $("#main > div.canvasHeightContainer > span.result").html(`${size}px`);

  drawCanvas();
}

function changeCanvasWidth() {
  canvasWidth = $("#main > div.canvasWidthContainer > input[type=range]").val();
  // console.log("size girildi", size);

  //   update output
  $("#main > div.canvasWidthContainer > span.result").html(`${size}px`);

  drawCanvas();
}

function downloadClick() {
  let canvas = document.getElementById("canvas");
  const a = document.createElement("a");
  a.href = canvas.toDataURL();
  a.download = "icon.png";
  a.click();
}
