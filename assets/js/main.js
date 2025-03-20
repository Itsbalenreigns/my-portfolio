/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.classList.contains("responsive")) {
        menuBtn.classList.remove("responsive");
    } else {
        menuBtn.classList.add("responsive");
    }
}

// Close menu when a nav link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("myNavMenu").classList.remove("responsive");
    });
});


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["Web Designer", "Web Developer", "Graphic Designer", "Researcher", "Content Creator"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});


/* ----- SCROLL REVEAL ANIMATION ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/* -- HOME -- */
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });
sr.reveal('.experience-info', { delay: 300 });
sr.reveal('.personal-info', { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 });

/* -- HEADINGS -- */
sr.reveal('.top-header', {});

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});

srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });
srLeft.reveal('.personal-info', { delay: 100 });
srLeft.reveal('.education-info', { delay: 100 });
srLeft.reveal('.experience-info', { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});

srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });


/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Remove active-link class from all links
            navLinks.forEach(link => {
                link.classList.remove('active-link');
            });

            // Add active-link class to the current link
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Add click event listeners to nav links
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove active-link class from all links
        navLinks.forEach(link => {
            link.classList.remove('active-link');
        });

        // Add active-link class to the clicked link
        event.target.classList.add('active-link');
    });
});