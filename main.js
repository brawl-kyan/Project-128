song1 = "";
song2= "";
leftX = "";
leftY = "";
rightX = "";
rightY= "";

function preload(){
    song1 = loadSound("Astronaut-in-The-Ocean-song.mp3");
    song2 = loadSound("BTS - Dynamite- [PagalWorld.NL].mp3");    
    }

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(500,250);
    
    video = createCapture(VIDEO);
    video.hide();

    PoseNet = ml5.poseNet(video , modalLoaded);
    PoseNet.on('pose' , gotPoses)
    }
    
    function modalLoaded(){
        console.log('PoseNet is PoseNet')    
        }
        
        function draw(){
        image(video, 0, 0 ,400, 300)    
        }
        
        function gotPoses(results){
        if(results.length > 0)
        {
        console.log(results);
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftX + "leftWristY = " + leftY);
        
        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightX + "rightWristY = " + rightY);
        }
        }



