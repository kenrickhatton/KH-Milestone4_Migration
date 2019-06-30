// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    }
    else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// menu toggle collaps script from - https://www.codeply.com/go/XtiWqN3lGn 
function collapseToggle(){
    ('.navbar-nav>li>a').on('click', function() {
    ('.navbar-collapse').collapse('hide');
});
// Scroll down script from  - 
//https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2 
    ('a[href^="#"]').on('click', function(event) {

    var target = (this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        ('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
}
