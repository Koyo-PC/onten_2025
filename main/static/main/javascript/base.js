document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const spBg = document.getElementById('sp__bg');
    const body = document.getElementById('mask');
    const header = document.querySelector('header'); 
    let scrollTimeout; 

    function closeMenu() {
        menuToggle.classList.remove('active');
        spBg.classList.remove('active');
        body.style.overflow = 'auto';
    }

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');

        spBg.classList.toggle('active');
        
        if (spBg.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });

    spBg.addEventListener('click', closeMenu);

    document.addEventListener('click', function (event) {
        if (spBg.classList.contains('active') && !menuToggle.contains(event.target) && !spBg.contains(event.target)) {
            closeMenu();
        }
    });

    window.addEventListener('scroll', function () {
        header.style.opacity = '0.2';

        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(function () {
            header.style.opacity = '1';
        }, 100); 
    });
});
function sleepSetTimeout(ms, callback) {
    setTimeout(callback, ms);
}

