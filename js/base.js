$(document).ready(function(){
    (function() {
        const nav = document.getElementById('nav');
        const anchor = nav.getElementsByTagName('li');
        const current = window.location.pathname.split('/')[1];
        for (let i = 0; i < anchor.length; i++) {
            const link = anchor[i].getElementsByTagName('a');
            if(link[0].href.includes(current) && current !== '') {
                anchor[i].classList.add('active');
            }else if(current === ''){
                anchor[0].classList.add('active');
            }else{
                anchor[i].classList.remove('active');
            }
        }
    })();

    $("#burger").click(function(){
        $(this).css("z-index", "100");
        $(".navLinks").toggle();
        $(".burgerLine").toggleClass("whiteBurger");
        $(".secondNavIcon").css("z-index", "100");
        $("#searchIcon").toggleClass("whiteSearch");
    });

})