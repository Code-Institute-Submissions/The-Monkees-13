//collecting the audio file
let musicOne = document.getElementById("musicOne");
let musicTwo = document.getElementById("musicTwo");
let musicThree = document.getElementById("musicThree");
let musicFour = document.getElementById("musicFour");

//Theres almost definately a better way to do this but my knowledge on javascript right now is limited
//first music controls
document.getElementById("playOne").addEventListener('click', function(){
    musicOne.play();
});
document.getElementById("pauseOne").addEventListener('click', function(){
    musicOne.pause();
});
document.getElementById("volUpOne").addEventListener('click', function(){
    musicOne.volume += 0.1;
});
document.getElementById("volDowOne").addEventListener('click', function(){
    musicOne.volume -= 0.1;
});

//second music controls
document.getElementById("playTwo").addEventListener('click', function(){
    musicTwo.play();
});
document.getElementById("pauseTwo").addEventListener('click', function(){
    musicTwo.pause();
});
document.getElementById("volUpTwo").addEventListener('click', function(){
    musicTwo.volume += 0.1;
});
document.getElementById("volDowTwo").addEventListener('click', function(){
    musicTwo.volume -= 0.1;
});

//third music controls
document.getElementById("playThree").addEventListener('click', function(){
    musicThree.play();
});
document.getElementById("pauseThree").addEventListener('click', function(){
    musicThree.pause();
});
document.getElementById("volUpThree").addEventListener('click', function(){
    musicThree.volume += 0.1;
});
document.getElementById("volDowThree").addEventListener('click', function(){
    musicThree.volume -= 0.1;
});

//fourth music controls
document.getElementById("playFour").addEventListener('click', function(){
    musicFour.play();
});
document.getElementById("pauseFour").addEventListener('click', function(){
    musicFour.pause();
});
document.getElementById("volUpFour").addEventListener('click', function(){
    musicFour.volume += 0.1;
});
document.getElementById("volDowFour").addEventListener('click', function(){
    musicFour.volume -= 0.1;
});

//this code is from stack overflow alexander farkas
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);