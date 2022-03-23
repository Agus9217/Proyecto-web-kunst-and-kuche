let animadoBox2 = document.querySelectorAll("#box2");
let animadoBox1 = document.querySelectorAll("#box1");

function box2Scroll() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animadoBox2.length; i++ ) {
        let alturaAnimadoBox2 = animadoBox2[i].offsetTop;
        if(alturaAnimadoBox2 - 750 < scrollTop) {
            animadoBox2[i].className = "row animate__animated animate__backInUp";
        }
    }
}


/*function box1Scroll() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animadoBox1.length; i++ ) {
        let alturaAnimadoBox1 = animadoBox1[i].offsetTop;
        if(alturaAnimadoBox1 - 600 < scrollTop) {
            animadoBox1[i].className = "col-md-6 animate__animated animate__fadeInDown";
        }
    }
}*/



window.onscroll = function() {/*box1Scroll(),*/ box2Scroll()};