noseX=0;
noseY=0;
nose2X=0;
nose2Y=0;

function preload() {
  clown_nose = loadImage('p.jpg');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet está inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x +40;
    noseY = results[0].pose.nose.y-80;

    nose2X = results[0].pose.nose.x-40;
    nose2Y = results[0].pose.nose.y-80;

  }
}

function draw() {
  image(video, 0, 0, 300, 300);
fill(0,0,0);
stroke(0,0,0);
circle(noseX,noseY,40);

fill(153, 50, 204)
stroke(153, 50, 204);
circle(nose2X,nose2Y,40);
}

function take_snapshot(){    
  save('myFilterImage.png');
}


