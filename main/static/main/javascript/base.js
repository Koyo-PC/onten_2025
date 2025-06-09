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

window.onload = function() {
    if (!sessionStorage.getItem("animationShown")) {
    var cont = document.getElementById("load-img-pc");
    var conte = document.getElementById("load-img-phone");

    cont.style.zIndex = 200000;
    conte.style.zIndex = 200000;

    sleepSetTimeout(2000, () => {
        cont.style.opacity = "0";
        conte.style.opacity = "0";
    });
    sleepSetTimeout(3000, () => {
        cont.style.display = "none";
        conte.style.display = "none";
    });
    

    const videoPC = cont.querySelector("video");
    const videoPhone = conte.querySelector("video");

    videoPC.addEventListener('click', function() {
        videoPC.pause();
        cont.style.opacity = "0";
        sleepSetTimeout(3000, () => cont.style.display = "none");
    });

    videoPhone.addEventListener('click', function() {
        videoPhone.pause();
        conte.style.opacity = "0";
        sleepSetTimeout(3000, () => conte.style.display = "none");
    });

    sessionStorage.setItem("animationShown", "true");
    } else {
    document.getElementById("load-img-pc").style.display = "none";
    document.getElementById("load-img-phone").style.display = "none";
    }
};

function sleepSetTimeout(ms, callback) {
    setTimeout(callback, ms);
}