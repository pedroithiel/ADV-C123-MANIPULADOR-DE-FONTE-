noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
function setup() {
    canvas = createCanvas(700,700)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(500,500)

    }

    function draw(){
        background("#646566");
        poseNet = ml5.poseNet(video, modeload)
        poseNet.on("pose", gotPose)
    }
    function modeload() {
        console.log("model load")
    }
    
    function gotPose(results) {
        if (results.length > 0) {
            console.log(results)
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.leftWrist.x;
        } else {
            console.log("algo deu error")
            //alert("ocorreu um error, você pode ter saido da visão da webCam")
        }
    }

    function elemento(name) {
        return documen.getElementById(name);
    }