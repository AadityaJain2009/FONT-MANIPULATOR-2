function setup(){
    canvas = createCanvas(750 , 530 );

    video = createCapture(VIDEO);
    video.size(400, 400);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',  gotPoses);
}

function modelLoaded(){
    console.log('Posenet is loaded ');
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
    }

}