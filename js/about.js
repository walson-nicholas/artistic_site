$(document).ready(function(){
    console.log("I see the javascript")
    if ($(window).width() < 600){
        var slideIndex = 1;
        var myTimer;

        showSlides(slideIndex);
        myTimer = setInterval(function(){plusSlides(1)}, 2000);

        // NEXT AND PREVIOUS CONTROL
        function plusSlides(n){
            clearInterval(myTimer);
            if (n < 0){
                showSlides(slideIndex -= 1);
            } else {
                showSlides(slideIndex += 1);
            }

            if (n === -1){
                myTimer = setInterval(function(){plusSlides(n + 2)}, 2000);
            } else {
                myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
            }
        }

        //Controls the current slide and resets interval if needed
        function currentSlide(n){
            clearInterval(myTimer);
            myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
            showSlides(slideIndex = n);s
        }

        function showSlides(n){
            var i;
            var slides = $(".clientImage");
            var dots = $(".dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex-1].style.display = "flex";
            dots[slideIndex-1].className += " active";
        }
    }
})