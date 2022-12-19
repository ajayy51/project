var au = document.getElementById("s1");
var imge = document.getElementById("imgg1");
var playpause = document.getElementById("playb");
var details = document.getElementById("info");
var sbar = document.getElementById("bar");
var x = 1;
var nex = 2;

var im1 = "images/untilifound.jpeg";
var im2 = "images/mounteverest.jpg";
var im3 = "images/stilldont.jpg";
var im4 = "images/theweeknd.jpg";
var so1 = "songs/until.mp3";
var so2 = "songs/mount.mp3";
var so3 = "songs/still.mp3";
var so4 = "songs/BlindingLights.mp3";

var name1 = "Until I found you";
var name2 = "Mount Everest";
var name3 = "Still don't know my name";
var name4 = "Blinding Lights"
function p(){
    if(x==1){
        au.play();
        x=2;
        playpause.src = "icons/pause.png";
    }
    else{
        au.pause();
        x=1;
        playpause.src = "icons/play-button.png";
    }
}

function nextt(){
    if(nex==1){
        au.src = so1;
        imge.src = im1;
        details.innerHTML = name1;
        document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/MlThQTo6D8A/maxresdefault.jpg')"
        nex = 2;

    }else if(nex==2){
        au.src = so2;
        imge.src = im2;
        details.innerHTML = name2;
        document.body.style.backgroundImage = "url('images/mounteverest.jpg')"
        nex = 3;
    }else if(nex==3){
        au.src = so3;
        imge.src = im3;
        details.innerHTML = name3;
        document.body.style.backgroundImage = "url('https://i.scdn.co/image/ab67616d0000b27389c39ba1acdf33ed7acd3867')"
        nex = 4;
    }else{
        au.src = so4;
        imge.src = im4;
        details.innerHTML = name4;
        document.body.style.backgroundImage = "url('https://images.hdqwalls.com/wallpapers/the-weeknd-blinding-lights-sy.jpg')"
        nex = 1;
    }
}

function backk(){
    if(nex==2){
        au.src = so3;
        imge.src = im3;
        details.innerHTML = name3;
        nex = 3;
    }else if(nex==3){
        au.src = so2;
        imge.src = im2;
        details.innerHTML = name2;
        nex = 1;
    }else{
        au.src = so1;
        imge.src = im1;
        details.innerHTML = name1;
        nex = 2;
    }
}