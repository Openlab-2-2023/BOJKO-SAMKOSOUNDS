let backToTopButton = document.getElementById('backToTop');
    backToTopButton.style.display = "none";


window.onscroll = function() {
    if(document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    }
    else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'})
};