var button;
var slider;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var flag = "stop";


function preload() { //load image
  img1 = loadImage("Internet 1.jpg");
  img2 = loadImage("Internet 2.jpg");
  img3 = loadImage("Internet 3.jpg");
  img4 = loadImage("Internet 4.jpg");
  img5 = loadImage("Internet 5.jpg");
  img6 = loadImage("Internet 6.jpg");
  img7 = loadImage("Internet 7.jpg");
  img8 = loadImage("Internet 8.jpg");
  img9 = loadImage("Internet 9.jpg");
  img10 = loadImage("Internet 10.jpg");
}

function setup() {
  //all black canvas with button
  createCanvas(1536,755);
  background(0,0,0);
  button = createButton('AMAZING BUTTON OF KNOWLEDGE');
  button.size(200,40);
  button.position(600, 250);
  button.mousePressed(blanket);

  slider = createSlider(1, 10, 1, 1);
  slider.position(1000, 240);
  slider.size(300,80);
  slider.hide();

}

function draw() {

    if (flag == "go") {

print(flag);

  var val= slider.value();

  print(val);
  if (val == 1) {
    print(1);
    image(img1,900,260);
  } else if (val == 2) {
    print(2);
    image(img2,900,260);
  } else if (val == 3) {
    image(img3,900,260);
  } else if (val == 4) {
    image(img4,900,260);
  } else if (val == 5) {
    image(img5,900,260);
  } else if (val == 6) {
    image(img6,900,260);
  } else if (val == 7) {
    image(img7,900,260);
  } else if (val == 8) {
    image(img8,900,260);
  } else if (val == 9) {
    image(img9,900,260);
  } else {
    image(img10,900,260);
    print(val);
  }
}
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

      //information
      textSize(20);
      fill(0,0,0);
      text("Net art is a type of art based on the web.", 50, 300);
      text("The possibilities are endless and some of it becomes very abstract. Not every", 50, 330);
      text("type of art is a drawing or a written thing on the web. Some can take place in",  50, 360);
      text("real life such as http://lifesharing.rhizome.org/bin/ ", 50, 390);
      text("Net art has been going on since the 1980s",50, 420);

      //slider


      slider.show();

      flag = "go";
    }
