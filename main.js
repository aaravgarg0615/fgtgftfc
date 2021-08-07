song1 = "";
song2 = "";
score = 0;
function preload()
{
	song1 = loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}


function draw() {
	image(video, 0, 0, 600, 500);

	if (scoreLeftWrist>0.2){
        song2.play
        song1.stop
    }
    if (scoreRightWrist>0.2){
        song1.play
        song2.stop
    }

}
function gotPoses(results){
    if(results.length >0){
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("score right wrist = " + scoreRightWrist +"score left wrist" + scoreLeftWrist);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightwristX = "+ rightWristX +"rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftwristX =" +leftWristX + "leftWristY = " + leftWristY);
    }
}





