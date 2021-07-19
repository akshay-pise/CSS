/*$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
    });
});*/

//when user scroll
window.scroll = function(){myfunction()};

//get navbar
var navbar1 = document.getElementById("navbar");

//get position
var sticky = navbar1.offsetTop;

//add sticky class
function myfunction(){
    if(window.pageYOffset >= sticky){
        navbar1.classList.add("sticky")
    }else{
        navbar1.classList.remove("sticky");
    }
}



