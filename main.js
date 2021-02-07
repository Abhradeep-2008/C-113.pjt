function preload(){

}

function setup(){
  canvas = createCanvas(300,300);
  canvas.center();
  webcam_view = createCapture(VIDEO);
   webcam_view.hide();
}

function draw(){
    image(webcam_view, 0, 0, 300, 300);
    circle(10,10, 80);
    circle(290,10, 80);
    circle(10,290, 80);
    circle(290,290, 80);
    fill("red");

    rect(0,50,30,200);
    rect(270,50,30,200);
    rect(50,0,200,30);
    rect(50,270,200,30);
    fill("royalblue");
}