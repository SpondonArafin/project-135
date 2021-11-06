 
 
status = "";
video = "";
 
function preload(){
  video = createCapture(VIDEO);
  video.hide();
}
 
 
function setup() {
  canvas = createCanvas(480, 380);
  canvas.center();
}
 
function start()
{
  image(video, 0, 0, 480, 380);
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
 
function modelLoaded() {
  console.log("Model Loaded!");
  status = true;
  video.loop();
  video.speed(1);
  video.volume(0);
}
  

