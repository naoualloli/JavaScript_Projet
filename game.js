// js header
  
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


//  js-fourmulair
    

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
  };

  function login_hide(){
    signup_form.style.display = "block";
    login_form.style.display = "none";
    signup_link.style.background = "#2981bc";
    login_link.style.background = "#34495e";
  };


  document.getElementById("submit").addEventListener("click",function(e){
    e.preventDefault();
    let firstname = document.getElementById("firstname").value;
    if(firstname === ''){
      document.getElementById("firstname").classList.add("error");
    }else{
      document.getElementById("firstname").classList.remove("error");
    }

    let lastname = document.getElementById("lstnme").value;
    if(lastname === ''){
      document.getElementById("lstnme").classList.add("error");
    }else{
      document.getElementById("lstnme").classList.remove("error");
    }

    let email = document.getElementById("email").value;
    if(email === ''){
      document.getElementById("email").classList.add("error");
    }else{
      document.getElementById("email").classList.remove("error");
    }

    let pass = document.getElementById("password").value;
    if(pass === ''){
      document.getElementById("password").classList.add("error");
    }else{
      document.getElementById("password").classList.remove("error");
    }

  });
  document.getElementById("submit2").addEventListener("click",function(e){
    e.preventDefault();
    let email2 = document.getElementById("email2").value;
    if(email2 === ''){
      document.getElementById("email2").classList.add("error");
    }else{
      document.getElementById("email2").classList.remove("error");
    }

    let pass = document.getElementById("password2").value;
    if(pass === ''){
      document.getElementById("password2").classList.add("error");
    }else{
      document.getElementById("password2").classList.remove("error");
    }




  });


  