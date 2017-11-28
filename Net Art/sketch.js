var button;
var img;

function preload() { //load image

  img = loadImage("InternetThing.jpg");
}

function setup() {
  //all black canvas with button
  createCanvas(1536,755);
  background(0,0,0);
  button = createButton('AMAZING BUTTON OF KNOWLEDGE');
  button.size(200,40);
  button.position(600, 250);
  button.mousePressed(blanket);
}


function blanket() {
      createCanvas(windowWidth, windowHeight+200);
      frameRate(15);
      background(255); //white background only shows through in small sliver
      noStroke();
      button.hide();

      // This is the red rectange at the top
      fill(255,0,0);
      rect(0,0,windowWidth,175);

      //title
      textSize(60);
      fill(255,255,255);
      text("Net Art", 10,50);

      //subtitle
      fill(255,255,255);
      textSize(20);
      text("An electronic take on artistic expression", 10,80);

      //yellow page
      fill(255,255,0);
      rect(0,200,windowWidth,windowHeight);

      image(img,700,300,500,400);
      img.resize(20,20);
    }
