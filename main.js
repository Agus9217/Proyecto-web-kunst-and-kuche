let animadoBox2 = document.querySelectorAll("#box2");
let animadoBox1 = document.querySelectorAll("#box1");
let animadoBox3 = document.querySelectorAll("#box3");

function box2Scroll() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animadoBox2.length; i++ ) {
        let alturaAnimadoBox2 = animadoBox2[i].offsetTop;
        if(alturaAnimadoBox2 - 750 < scrollTop) {
            animadoBox2[i].className = "col-md-4 my-3 animate__animated animate__backInUp";
        }
    }
}


function box1Scroll() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animadoBox1.length; i++ ) {
        let alturaAnimadoBox1 = animadoBox1[i].offsetTop;
        if(alturaAnimadoBox1 - 750 < scrollTop) {
            animadoBox1[i].className = "row mx-auto animate__animated animate__backInLeft";
        }
    }
}

function box3Scroll() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animadoBox3.length; i++ ) {
        let alturaAnimadoBox3 = animadoBox3[i].offsetTop;
        if(alturaAnimadoBox3 - 750 < scrollTop) {
            animadoBox3[i].className = "row align-items-md-stretch animate__animated animate__backInLeft";
        }
    }
}








window.onscroll = function() {box1Scroll(), box2Scroll(), box3Scroll()};