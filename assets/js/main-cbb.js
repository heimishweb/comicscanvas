const clearButton = document.querySelector('.clear');
const stroke_weight = document.querySelector('.stroke-weight');
const color_picker = document.querySelector('.color-picker');
// const puppeteer = require('puppeteer');


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

//background comic template image code ****************************
var imageUrl1;
var background = new Image();
background.src = "https://res.cloudinary.com/dejaksfsk/image/upload/v1583809756/canvas-bubble-blue_lbm3xf.png";


//super imposing another image - changing opacity to make transluscent to make
var imageUrl2;
var background2 = new Image();
background2.src = "https://res.cloudinary.com/dejaksfsk/image/upload/v1583809756/canvas-bubble-blue_lbm3xf.png";

background.onload = function () {
  // ctx.globalAlpha = 0.4; //to change opacity to 40%
  // ctx.drawImage(background2, 100, 0);

  ctx.drawImage(background, 100, 0);

}

//byron's puppeteer code
// async function run() {
//   let browser = await puppeteer.launch({ headless: false });
//   let page = await browser.newPage();
//   await page.goto('http://localhost:5000/');
//   await page.screenshot({ path: './image.jpg', type: 'jpeg' });
//   await page.close();
//   await browser.close();
// }

$("#nextframe").on("click", function () {
  // var page = require('webpage').create();
  // page.open('http://github.com/', function () {
  //   page.render('github.png');
  //   phantom.exit();
  // });

  // run();

  var opac = 0.98;
  //!!i want to take a screen shot *HERE* before loading the next vellum paper
  ctx.globalAlpha = opac; //to change opacity to 40%
  ctx.drawImage(background2, 100, 0);
})

$("#startOver").on("click", function () {
  location.reload();
})

//saving image***************************************** [not working]


//******************************************************

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

clearButton.addEventListener('click', clearCanvas);

function start(e) {
  isDrawing = true;
  draw(e);
}

function draw({ clientX: x, clientY: y }) {
  if (!isDrawing) return;
  ctx.lineWidth = stroke_weight.value;
  ctx.lineCap = "round";
  ctx.strokeStyle = color_picker.value;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function stop() {
  isDrawing = false;
  ctx.beginPath();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();


