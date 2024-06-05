var btn=document.getElementsByClassName("btn");
var gallery=document.getElementById("gallery");
    var images = new Array(
        "images/img10.jpg",
        "images/img11.jpg",
        "images/img12.jpg",
        "images/img13.jpg"
    );

    for(let i=0 ;i<btn.length;i++){
        btn[i].onclick = function(){
            gallery.src = images[i];
        };
    }


    let nowimg = document.querySelector('.nowImg');

    function clickImg(classe){
        nowimg.src = classe
    }
    
    function clickImg1(classe){
        nowimg.src = classe
    }


   