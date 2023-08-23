// alert("Hello")

let img;
let capture;
let posenet;
let nosex;
let nosey;
let singlePose;
let skeleton;

function setup(){
    createCanvas(windowWidth,windowHeight);
    // img=loadImage("20220104_050258.jpg")
    capture=createCapture(VIDEO);
    capture.hide();

    posenet=ml5.poseNet(capture,modelLoaded);
    posenet.on("pose",recievedPoses);
}

function recievedPoses(poses){
    console.log(poses);
    if(poses.length>0){
        singlePose=poses[0].pose;
        skeleton=poses[0].skeleton;
    }
}

function modelLoaded(){
    console.log("model has loaded");
}
function draw() {
    background(220);
    // image(img,100,100,100,100)
    image(capture,windowWidth,0,-windowWidth,windowHeight);
    // circle(nosex,nosey,20)

    if(singlePose){

        for(let i=0;i<singlePose.keypoints.length;i++){
            ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,20);
        }

        stroke(255)
        strokeWeight(5)
        for(let j=0;j<skeleton.length;j++){
            line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y);
        }

    }

  }

  