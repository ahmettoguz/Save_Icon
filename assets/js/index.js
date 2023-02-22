let src = null;
let color = null;
let size = null;

function findUniCode(name) {
  let testI = document.createElement("i");

  testI.className = name;
  document.body.appendChild(testI);

  let char = window.getComputedStyle(testI, ":before").content;
  testI.remove();

  console.log("\\u" + char.charCodeAt(1).toString(16));

  return "\\u" + char.charCodeAt(1).toString(16);
}

function drawCanvas(code) {
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

function changeSource() {
  src = $("#main > div.sourceContainer > input").val();
  console.log("source girildi:", src);
}

function changeColor() {
  color = $("#main > div.colorContainer > input[type=color]").val();
  console.log("color girildi:", color);
}

function changeSize() {
  size = $("#main > div.sizeContainer > input[type=range]").val();
  console.log("size girildi", size);

  //   update output
  $("#main > div.sizeContainer > span.result").html(`${size}px`);
}

function downloadClick() {
  console.log("download başladı");
}
