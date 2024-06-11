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







  //////////
  var signup_link = document.querySelector('.a1');
  var login_link = document.querySelector('.a2');


  var signup_form = document.querySelector('.signup-form');
  var login_form = document.querySelector('.login-form');

  var sign_sub = document.querySelector('.sign-sub');
  var log_sub = document.querySelector('.log-sub');

  login_link.addEventListener('click',signup_hide);
  signup_link.addEventListener('click',login_hide);


  function signup_hide(){
    signup_form.style.display = "none";
    login_form.style.display = "block";
    signup_link.style.background = "#34495e";
    login_link.style.background = "#2981bc";
  }

  function login_hide(){
    signup_form.style.display = "block";
    login_form.style.display = "none";
    signup_link.style.background = "#2981bc";
    login_link.style.background = "#34495e";
  }