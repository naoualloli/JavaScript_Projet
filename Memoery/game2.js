let imgs = [
    'images-images/emoji1.jpeg',
    'images-images/emoji2.jpeg',
    'images-images/emoji3.jpeg',
    'images-images/emoji4.jpeg',
    'images-images/emoji5.jpeg',
    'images-images/emoji6.jpeg'];

let rightAudio = new Audio('audio/audio.unknown');
let wrongtAudio = new Audio('audio/audioo.unknown');

let main = document.getElementById('main');
let allDivs = document.getElementsByTagName('div');

function drawImgs(){
    for (let i=0 ; i<imgs.length ; i++){
        main.innerHTML += '<div><img src="'+imgs[i]+'"></div>';
    }
}
drawImgs();
drawImgs();

var flg = true ;
var arr = [];
for (let i=0 ; i<allDivs.length ; i++){
    allDivs[i].addEventListener('click',function(){
        if(flg){
            this.firstChild.style.opacity = '1';
            if(arr.length == 0){
                arr[0] = this;
            }else if(arr.length == 1){
                arr[1] = this;
            }
            if(arr.length == 2){
                flg = false ;
                setTimeout(checkImg,200);
            }
        }else{
            return;
        }

    })
}

function checkImg(){
    if(arr[0].firstChild.getAttribute('src') == arr[1].firstChild.getAttribute('src')){
        rightAudio.play();
    }else{
        arr[0].firstChild.style.opacity = 0;
        arr[1].firstChild.style.opacity = 0;
        wrongtAudio.play();
    }
    arr =[];
    flg = true ;
}