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


    // const main=document.querySelector('.main');
    // const loginBtn = document.querySelectorAll('#signUp .btns button')[0];
    // const signUpBtn = document.querySelectorAll('#login .btns button')[0];
    // const login=document.querySelector('#signUp .others span');
    // const signUp=document.querySelector('#login .others span');

    // let currentPage='signUp';

    // window.addEventListener('load',()=>{
    //     document.querySelector('#signUp .btns button').classList.add('active');
    //     document.querySelectorAll('#signUp .btns button').classList.add('unactive');

    // })
    // const form =()=>{
    //     if(currentPage == 'signUp' ){
    //         main.style.transform ='rotateY(180deg) rotateX(40deg)';
        
    //         setTimeout(()=>{
    //             main.style.transform ='rotateY(180deg) rotateX(0deg)';
    //         }, 1000);
    //         currentPage = 'login';

    //         document.querySelector('#signUp .btns button').classList.remove('active');
    //         document.querySelector('#signUp .btns button').classList.add('unactive');

    //         document.querySelectorAll('#signUp .btns button')[1].classList.remove('unactive');
    //         document.querySelectorAll('#signUp .btns button')[1].classList.add('active');

    //         document.querySelectorAll('#login .btns button')[1].classList.remove('unactive');
    //         document.querySelectorAll('#login .btns button')[1].classList.add('active');

    //         document.querySelector('#login .btns button').classList.remove('active');
    //         document.querySelector('#login .btns button').classList.add('unactive');

    //     }else{
    //         main.style.transform = 'rotateY(0deg)'
    //         currentPage = 'signUp';

    //         document.querySelectorAll('#login .btns button')[1].classList.remove('active');
    //         document.querySelectorAll('#login .btns button')[1].classList.add('unactive');

    //         document.querySelector('#login .btns button').classList.remove('unactive');
    //         document.querySelector('#login .btns button').classList.add('active');

    //         document.querySelectorAll('#signUp .btns button')[1].classList.remove('active');
    //         document.querySelectorAll('#signUp .btns button')[1].classList.add('unactive');

    //         document.querySelector('#signUp .btns button').classList.remove('unactive');
    //         document.querySelector('#signUp .btns button').classList.add('active');

    //     };
    // };
    // loginBtn.addEventListener('click',form);
    // signUpBtn.addEventListener('click',form);
    // login.addEventListener('click',form);
    // signUp.addEventListener('click',form);