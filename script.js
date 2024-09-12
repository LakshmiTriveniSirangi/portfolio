var typed=new Typed(".text",{
    strings:["Frontend Developer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
    })
// Select the menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let closeBtn = document.querySelector('#close-btn');
const navLinks = document.querySelectorAll('.navbar a');
// Add click event listener to the menu icon
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Add click event listener to the close button
navbar.addEventListener('click', () => {
    navbar.classList.remove('active');
});

// Handle scroll events
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=${id}]').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close the navbar on scroll if it's open
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
});

