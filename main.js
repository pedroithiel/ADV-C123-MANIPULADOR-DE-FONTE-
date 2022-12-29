var difference = 0;
var leftWristX = 0;
var rightWristX = 0;
var texto;
function setup() {
    canvas = createCanvas(700, 700);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);

}

function draw() {
    texto = elemento("texto").value;
    
    background("#32a852");
    poseNet = ml5.poseNet(video, modeload);
    poseNet.on("pose", gotPose);
    
    fill("#0f0f0f");
    
    textSize(difference);
    text(texto, leftWristX, rightWristX);
    
    //textSize(30);
}
function modeload() {
    console.log("model load")
}

function gotPose(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        
    } else {
        console.log("algo deu error");
        //alert("ocorreu um error, você pode ter saido da visão da webCam")
    }
}

function elemento(name) {
    return document.getElementById(name);
}