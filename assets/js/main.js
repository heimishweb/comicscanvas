const clearButton = document.querySelector('.clear');
const stroke_weight = document.querySelector('.stroke-weight');
const color_picker = document.querySelector('.color-picker');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

//background comic template image code ****************************
var imageUrl1;
var background = new Image();
background.src = "https://images.creativetemplate.net/wp-content/uploads/2015/10/Comic-Strip-With-Speech-Bubble.jpg";


//super imposing another image - changing opacity to make transluscent to make
var imageUrl2;
var background2 = new Image();
background2.src = "https://images.creativetemplate.net/wp-content/uploads/2015/10/Comic-Strip-With-Speech-Bubble.jpg";

background.onload = function () {
  // ctx.globalAlpha = 0.4; //to change opacity to 40%
  // ctx.drawImage(background2, 100, 0);

  ctx.drawImage(background, 100, 0);

}

$("#nextframe").on("click", function () {
  var opac = 0.98;
  //!!i want to take a screen shot *HERE* before loading the next vellum paper
  ctx.globalAlpha = opac; //to change opacity to 40%
  ctx.drawImage(background2, 100, 0);
})

//saving image***************************************** [not working]
function saveImage() {
  var canvas = document.getElementById("mycanvas");
  var img = canvas.toDataURL("image/png");
  // with the value in IMG you can write it out as a new Image like so:

  document.write('<img src="' + img + '"/>');
 
  }

  $("#capture").on("click", function () {
    saveImage();
  });
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