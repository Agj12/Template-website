/* selects elements va */
const navToggle = document.querySelector('.nav-button');
const navLinks = document.querySelectorAll('.nav-link')

/* changes reaction upon user click */
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

/* removes the nav bar after slection has been made */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})