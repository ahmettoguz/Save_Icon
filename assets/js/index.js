let src = "\uf015";
let size = 50;
let color = "black";

let canvasHeight = 50;
let canvasWidth = 50;

let iconPosX = 0;
let iconPosY = canvasHeight;

$(function () {
  // I need this because when I want to print icon to canvas it do not print in first time.
  initilizeCanvas();
});

function initilizeCanvas() {
  for (let i = 0; i < 200; i++) {
    setTimeout(() => {
      drawCanvas();
    }, i);
  }
}

function findUniCode(name) {
  let testI = document.createElement("i");
  testI.className = name;
  document.body.appendChild(testI);
  let char = window.getComputedStyle(testI, ":before").content;
  testI.remove();
  return char.charCodeAt(1).toString(16);
}

function drawCanvas() {
  let canvas = document.getElementById("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ctx.textAlign = "center";
  // ctx.textBaseline = "middle";
  ctx.font = size + "px FontAwesome";
  ctx.fillStyle = color;

  ctx.fillText(src, iconPosX, iconPosY);
}

function changeSource() {
  src = $("#main > div.sourceRow > div > div > input").val().trim();

  if (src.length == 4) {
    // unicode source
    src = String.fromCharCode(parseInt(src, 16));
    drawCanvas();
  } else if (src.length > 4) {
    //i tag source
    src = src.split(`"`);
    if (src.length > 1) {
      src = findUniCode(src[1]);
      src = String.fromCharCode(parseInt(src, 16));
      drawCanvas();
    }
  }
}

function changeSize() {
  const element = $(
    "#main > div.detailRow > div:nth-child(1) > div.sizeContainer > input[type=range]"
  );
  size = element.val();

  // update output
  element.next().html(`${size}px`);

  // change frame sizes relatively
  changeCanvasWidth(size);
  changeCanvasHeight(size);
  changeIconPosY(size);

  drawCanvas();
}

function changeColor() {
  color = $(
    "#main > div.detailRow > div:nth-child(1) > div.colorContainer > input[type=color]"
  ).val();

  drawCanvas();
}

function changeCanvasHeight(size = null) {
  const element = $(
    "#main > div.detailRow > div:nth-child(2) > div.canvasHeightContainer > input[type=range]"
  );
  if (size != null) element.val(size);

  canvasHeight = element.val();

  changeIconPosY(canvasHeight);

  // update output
  element.next().html(`${canvasHeight}px`);

  drawCanvas();
}

function changeCanvasWidth(size = null) {
  const element = $(
    "#main > div.detailRow > div:nth-child(2) > div.canvasWidthContainer > input[type=range]"
  );
  if (size != null) element.val(size);

  canvasWidth = element.val();

  element.next().html(`${canvasWidth}px`);

  drawCanvas();
}

function changeIconPosX() {
  const element = $(
    "#main > div.detailRow > div:nth-child(3) > div.iconPosXContainer > input[type=range]"
  );
  iconPosX = element.val();

  // update output
  element.next().html(`${iconPosX}px`);

  drawCanvas();
}

function changeIconPosY(size = null) {
  const element = $(
    "#main > div.detailRow > div:nth-child(3) > div.iconPosYContainer > input[type=range]"
  );

  if (size != null) element.val(size);

  iconPosY = element.val();

  // update output
  element.next().html(`${iconPosY}px`);

  drawCanvas();
}

function downloadClick() {
  let canvas = document.getElementById("canvas");
  const a = document.createElement("a");
  a.href = canvas.toDataURL();
  a.download = "myAwesomeIcon.png";
  a.click();
}

function clearSource() {
  $("#main > div.sourceRow > div > div > input").val("");
}
