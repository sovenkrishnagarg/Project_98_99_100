var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var camera = document.getElementById("camera");

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality : 90, 
})

function start1(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

function start2(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

function start3(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}


recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;

    if(Content == "take my selfie"){
        console.log("taking selfie ------")            
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking Your Selfie In 5 Seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        takeSnapshot();
        save();    
    }, 5000)
}

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML += "<img id='selfie_image' src="+data_uri+">";
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("559858b187f4f6a9592ef08d063c1d10.jpeg").src;
    link.href = image;
    link.click()
}