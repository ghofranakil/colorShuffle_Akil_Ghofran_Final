var rgbBtn, imgUploadBtn, downloadBtn, img, mainCanvas, originalPixels, shuffleRGB,
shufflerandomRGB, shuffleCold, shuffleWarm, undoShuffle, shufflePosterize, shuffleInvert,
shuffleBlur, shuffleDilate, shuffleErode, shuffleGray, shuffleThreshold, shuffleBright,
shuffleDark, tintBlue, tintGreen, tintRed,actualImg;

// var state=[];
// function preload() {
//   logoImg = loadImage("https://i.imgur.com/8iRsGV3.png");  // Load the image
// }

function updateState(){
    state.push(pixels);
}

function myUpdatePixels(){
    updatePixels();
    updateState();
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 255);

    var black = color(0);
    var white  = color (255);


    imgUploadBtn = createFileInput(uploadImage);
    imgUploadBtn.position(10, 110);


    //Shuffle buttons
    rgbBtn = createButton("Stumble");
    rgbBtn.position(300, 100);
    rgbBtn.mousePressed(shuffleRGB);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    rgbBtn = createButton("Noise");
    rgbBtn.position(401, 100);
    rgbBtn.mousePressed(shufflerandomRGB);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    rgbBtn = createButton("Cold");
    rgbBtn.position(502, 100);
    rgbBtn.mousePressed(shuffleCold);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    rgbBtn = createButton("Warm");
    rgbBtn.position(603, 100);
    rgbBtn.mousePressed(shuffleWarm);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    rgbBtn = createButton("Bright");
    rgbBtn.position(704,100);
    rgbBtn.mousePressed(shuffleBright);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    rgbBtn = createButton("Dark");
    rgbBtn.position(805,100);
    rgbBtn.mousePressed(shuffleDark);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    //Filter buttons
    rgbBtn = createButton("Invert");
    rgbBtn.position(300, 650);
    rgbBtn.mousePressed(shuffleInvert);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    rgbBtn = createButton("Erode");
    rgbBtn.position(401, 650);
    rgbBtn.mousePressed(shuffleErode);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');



    rgbBtn = createButton("Blur");
    rgbBtn.position(502, 650);
    rgbBtn.mousePressed(shuffleBlur);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    rgbBtn = createButton("Dilate");
    rgbBtn.position(603, 650);
    rgbBtn.mousePressed(shuffleDilate);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    rgbBtn = createButton("Gray");
    rgbBtn.position(300, 691);
    rgbBtn.mousePressed(shuffleGray);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    rgbBtn = createButton("Posterize");
    rgbBtn.position(401,691);
    rgbBtn.mousePressed(shufflePosterize);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    rgbBtn = createButton("Threshold");
    rgbBtn.position(502,691);
    rgbBtn.mousePressed(shuffleThreshold);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    //Tint buttons
    rgbBtn = createButton("Bluish");
    rgbBtn.position(910,250);
    rgbBtn.mousePressed(tintBlue);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    rgbBtn = createButton("Greenish");
    rgbBtn.position(910,291);
    rgbBtn.mousePressed(tintGreen);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    rgbBtn = createButton("Redish");
    rgbBtn.position(910,332);
    rgbBtn.mousePressed(tintRed);

    rgbBtn.style('background-color', black);
    rgbBtn.style('color', white);
    rgbBtn.style('border', white);
    rgbBtn.style('height', '40px');
    rgbBtn.style('width', '100px');


    //Undo, revert, and download buttons
    undoBtn = createButton("undo");
    undoBtn.position(10, 250);
    undoBtn.mousePressed(undoShuffle);

    undoBtn.style('background-color', black);
    undoBtn.style('color', white);
    undoBtn.style('border', white);
    undoBtn.style('height', '40px');
    undoBtn.style('width', '100px');


    undoBtn = createButton("revert");
    undoBtn.position(10, 291);
    undoBtn.mousePressed(revert);

    undoBtn.style('background-color', black);
    undoBtn.style('color', white);
    undoBtn.style('border', white);
    undoBtn.style('height', '40px');
    undoBtn.style('width', '100px');


    downloadBtn = createButton("Download");
    downloadBtn.position(10, 332);
    downloadBtn.mousePressed(downloadImage);

    downloadBtn.style('background-color', black);
    downloadBtn.style('color', white);
    downloadBtn.style('border', white);
    downloadBtn.style('height', '40px');
    downloadBtn.style('width', '100px');

}

function draw()
{
  // display image (img, x, y)
  //image(logoImg, 0, 0, 185,logoImg.height/logoImg.width*185);

  fill(255);
  strokeWeight(4);
  stroke(0);
  rect(2, 2, 153, 40);

  fill(0);
  noStroke();
  textSize(24);
  textFont('Helvetica');
  textStyle(NORMAL);
  text('color', 10, 30);
  textStyle(NORMAL);

  fill(0);
  textSize(24);
  textStyle(BOLD);
  text('Shuffle', 63, 30);

  fill(100);
  textSize(18);
  text('Shuffle the colors using these...', 300, 90);

  textSize(18);
  text('and here are some filters!', 300, 640);

  text('tints?', 910, 240);

}

function uploadImage(file) {

    clear();
    state=[];

    if (file.type === 'image') {
        img = createImg(file.data, 'Error Loading Image', function () {
            img.hide();
            if (img != null) {
                new_size = Math.min(400,img.width);
                image(img, width*1/4, height*1/4, 500, img.height/img.width*500);
                loadPixels();

                // copy the pixels array to keep the original
                originalPixels= pixels.slice();
                updateState();
            }
        });
    } else {
        alert('File is not an image!');
    }
}

function updateActualImage(){
  actualImg = get( width*1/4, height*1/4, 500, img.height/img.width*500);
}


//Tint functions:
function tintBlue() {
  tint(0, 153, 204, 126);
  updateActualImage()
  image(actualImg,width*1/4, height*1/4,);
  loadPixels();
  myUpdatePixels();
	}

function tintGreen() {
  tint(0, 204, 100, 126);
  updateActualImage()
  image(actualImg,width*1/4, height*1/4,);
  loadPixels();
  myUpdatePixels();
  	}

function tintRed() {
  tint(255, 31, 38, 100);
  updateActualImage()
  image(actualImg,width*1/4, height*1/4,);
  loadPixels();
  myUpdatePixels();
  }

// filter functions
function shuffleInvert() {
	filter(INVERT);
  loadPixels();
  myUpdatePixels();
	}

function shuffleErode() {
	filter(ERODE);
  loadPixels();
  myUpdatePixels();
}

function shuffleBlur() {
  //updateActualImage()
  //image(actualImg,width*1/4, height*1/4,);
  filter(BLUR, 2);
  loadPixels();
  myUpdatePixels();
}

function shuffleDilate() {
	filter(DILATE);
  loadPixels();
  myUpdatePixels();
}

function shufflePosterize() {
	filter(POSTERIZE, 5);
  loadPixels();
  myUpdatePixels();
}

function shuffleGray() {
	filter(GRAY);
  loadPixels();
  myUpdatePixels();
}

function shuffleThreshold() {
	filter(THRESHOLD, 0.8);
  loadPixels();
  myUpdatePixels();
}


//shuffle functions
function shuffleBright() {
  loadPixels();
  for (var i = 0; i < pixels.length; i += 4) {
      pixels[i] = pixels[i]*1.2;
      pixels[i] = constrain(pixels[i], 0, 255);
      pixels[i + 1] = pixels[i + 1] * 1.2;
      pixels[i + 1] = constrain(pixels[i + 1], 0, 255);
      pixels[i + 2] = pixels[i + 2] * 1.2;
      pixels[i + 2] = constrain(pixels[i + 2], 0, 255);
  }
  myUpdatePixels();
}

function shuffleDark() {
  loadPixels();
  for (var i = 0; i < pixels.length; i += 4) {
      pixels[i] = pixels[i]*0.9;
      pixels[i] = constrain(pixels[i], 0, 255);
      pixels[i + 1] = pixels[i + 1] * 0.9;
      pixels[i + 1] = constrain(pixels[i + 1], 0, 255);
      pixels[i + 2] = pixels[i + 2] * 0.9;
      pixels[i + 2] = constrain(pixels[i + 2], 0, 255);
  }
  myUpdatePixels();
}

function shuffleRGB() {
    loadPixels();
    for (var i = 0; i < pixels.length; i += 4) {
        var R = pixels[i];
        var G = pixels[i + 1];
        var B = pixels[i + 2];

        pixels[i] = G; // red
        pixels[i + 1] = B; // green
        pixels[i + 2] = R; // blue
    }
    myUpdatePixels();
}

function shufflerandomRGB() {
	loadPixels();
	for (var i = 0; i < pixels.length; i += 4) {
		var R = pixels[i];
		var G = pixels[i + 1];
		var B = pixels[i + 2];

		pixels[i] = random([G, B]); // red
		pixels[i + 1] = random([R, B]); // green
		pixels[i + 2] = random([R, G]); // blue
	}
	myUpdatePixels();
}

function shuffleCold() {
  loadPixels();
	for (var i = 0; i < pixels.length; i += 4) {
    var G = pixels[i + 1];
		var B = pixels[i + 2];

    pixels[i] = Math.round (pixels[i]/2);
    pixels[i + 1] = B;
    pixels[i + 2] = G;
    }
    myUpdatePixels();
}

function shuffleWarm() {
  loadPixels();
	for (var i = 0; i < pixels.length; i += 4) {

    pixels[i] = pixels[i] + 5;
    pixels[i + 1] = Math.round (pixels[i + 1]/1.2);
    pixels[i + 2] = Math.round (pixels[i + 2]/1.2);
    }
    myUpdatePixels();
}


// undo, revert and download functions
function goToState(index){
  loadPixels();
  for (var i = 0; i < pixels.length; i += 1) {
      pixels[i]=state[index][i];
  }
  state = state.slice(0,index+1);
  updatePixels();
}

function undoShuffle() {

    if (state && state.length>1){
      goToState(state.length-2);
      console.log ("yes");
    }
}

function revert(){
    goToState(0);
}

function downloadImage() {
     updateActualImage();
	   save(actualImg);
}
