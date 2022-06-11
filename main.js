leftwristx=""
leftwristy=""
rightwristx=""
rightwristy=""
song=""
function preload(){
song=loadSound("music.mp3")
}
function setup(){
    canvas=createCanvas(500,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video.moadelloaded)
    posenet.on('pose',getposes)
}
function draw(){
    image(video,0,0,500,500)
    fill("#FF66B3")
    stroke("#FF7B9C")
    circle(leftwristx,leftwristy,50)
    leftWristYno=Number(leftwristy)
    removeDecimal=floor(leftWristYno)
    volume=removeDecimal/500
    document.getElementById("VS").innerHTML=volume
    song.setVolume(volume)
}
function moadelloaded(){
    console.log("moadel is loaded")
}
function getposes(error,results){
    if (error) {
        console.log(error)
    }
    else {
        console.log(results)
        leftwristx=results[0].pose.leftWrist.x
        rightwristx=restuls[0].pose.rightWrist.x
        leftwristy=results[0].pose.leftWrist.y
        rightwristy=results[0].pose.rightWrist.y
        console.log(leftwristx,leftwristy,rightwristx,rightwristy)
    }
}
function play(){
song.play()
song.setVolume(1)
song.rate(1)
console.log("play button is clicked")
}