noseX = 0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    canvas=createCanvas(550, 550);
    canvas.position(650,150);
    video=createCapture(VIDEO);
    video.size(550,550);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("pOsEnEt HaS bEeN iNtIaLiZeD");
}

function gotPoses(results) {
   if(results.length > 0)
   {
       console.log(results);
       noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;   
        console.log( "noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log( "leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
    }
    
}

function draw() {
    background("#000000");
    document.getElementById("square_side").innerHTML = " Side of The Square is =" + difference + " pixels"; 
    fill("#00c8ff");
    stroke("#001b7a");
    square(noseX, noseY, difference);


}


