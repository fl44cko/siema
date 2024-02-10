const circle = document.querySelector('.circle');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const main = document.querySelector('main');
let szerokosc = 1000;
let wysokosc = 1000;

let dodatniePX = 200;

const line = document.querySelector('.line');
const circle_mini = document.querySelectorAll('.circle_mini');
window.addEventListener('scroll', circleScroll);



if (window.matchMedia("(min-width: 1801px) and (max-width: 2000px)").matches) {
    szerokosc = 730;
    wysokosc = 730;
}
if (window.matchMedia("(min-width: 1601px) and (max-width: 1800px)").matches) {
    szerokosc = 550;
    wysokosc = 550;
}

if (window.matchMedia("(min-width: 1401px) and (max-width: 1600px)").matches) {
    szerokosc = 550;
    wysokosc = 550;
}
if (window.matchMedia("(min-width: 1201px) and (max-width: 1400px)").matches) {
    szerokosc = 500;
    wysokosc = 500;
}
if (window.matchMedia("(min-width: 1024px) and (max-width: 1200px)").matches) {
    szerokosc = 450;
    wysokosc = 450;
}
if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
    szerokosc = 400;
    wysokosc = 400;
}
if (window.matchMedia("(min-width: 655px) and (max-width: 767px)").matches) {
    szerokosc = 400;
    wysokosc = 400;
}


//w srodku circle daj napis kaypee a stworz swoja marke zrob tak ze nie ma br

function circleScroll() {
    circle.style.height = wysokosc;
    circle.style.width = szerokosc;
    let circleScrolly = scrollY * 2.7 + szerokosc + 'px';
    circle.style.height = circleScrolly ;
    circle.style.width = circleScrolly ;

    if (parseInt(circle.style.height) >= screenHeight + dodatniePX && parseInt(circle.style.width) >= screenWidth + dodatniePX) {
        document.querySelector('.con2').style.opacity = '1';
        document.querySelector('.con4').style.opacity = '1';
        circle.style.display = 'none';
        main.style.background = 'black';
        line.classList.add('line_animation');
        // line.style.opacity = '1';
        setTimeout(function(){
        document.querySelector('.lang1').style.opacity = '1';
        document.querySelector('.miniline1').style.opacity = '1';
        document.querySelector('.miniline1').classList.add('miniline_width');

        }, 500)
        setTimeout(function(){
        document.querySelector('.line_con41').classList.add('line_cont_width');
        document.querySelector('.line_con41').style.opacity = '1';
        }, 1300)
        setTimeout(function(){
        document.querySelector('.circle_mini1').style.opacity = '1';
        },2100)
            


        setTimeout(function(){
         document.querySelector('.lang2').style.opacity = '1';
        document.querySelector('.miniline2').style.opacity = '1';
        document.querySelector('.miniline2').classList.add('miniline_width');
        // document.querySelector('.circle_mini2').style.opacity = '1';
        }, 1000)
        setTimeout(function(){
        document.querySelector('.line_con42').style.opacity = '1';
        document.querySelector('.line_con42').classList.add('line_cont_width');
        },1800)
        setTimeout(function(){
            document.querySelector('.circle_mini2').style.opacity = '1';
        },2600)





        setTimeout(function(){
         document.querySelector('.lang3').style.opacity = '1';
        document.querySelector('.miniline3').style.opacity = '1';
        document.querySelector('.miniline3').classList.add('miniline_width');
        // document.querySelector('.line_con43').style.opacity = '1';
        // document.querySelector('.circle_mini3').style.opacity = '1';
        }, 1500)
        setTimeout(function(){
            document.querySelector('.line_con43').style.opacity = '1';
            document.querySelector('.line_con43').classList.add('line_cont_width');
        },2300)
        setTimeout(function(){
            document.querySelector('.circle_mini3').style.opacity = '1';
        },3100)



        setTimeout(function(){
         document.querySelector('.lang4').style.opacity = '1';
        document.querySelector('.miniline4').style.opacity = '1';
        document.querySelector('.miniline4').classList.add('miniline_width');
        // document.querySelector('.line_con44').style.opacity = '1';
        // document.querySelector('.circle_mini4').style.opacity = '1';
        }, 2000)
        setTimeout(function(){
            document.querySelector('.line_con44').style.opacity = '1';
            document.querySelector('.line_con44').classList.add('line_cont_width');
        },2800)
        setTimeout(function(){
            document.querySelector('.circle_mini4').style.opacity = '1';
        },3600)



    } else {
        document.querySelector('.con2').style.opacity = '0';
        document.querySelector('.con4').style.opacity = '0';
        circle.style.display = 'block';
        main.style.background = 'white';
        // line.classList.remove('line_animation');



    }
}

document.querySelector('.ikona').addEventListener('click', function() {
    scrollBy({
        top:screenHeight  /1.6,
        behavior: 'smooth'
    });
});
//napraw te divy tylko