const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.control');
let activeSlide = 0;
let prevActive = 0;

changeSlides();
let int = setInterval(changeSlides, 4000);

function changeSlides() {
	slides[prevActive].classList.remove('active');
	controls[prevActive].classList.remove('active');

	slides[activeSlide].classList.add('active');
	controls[activeSlide].classList.add('active');
	
	prevActive = activeSlide++;
	
	if(activeSlide >= slides.length) {
		activeSlide = 0;
	}
	
	console.log(prevActive, activeSlide);
}

controls.forEach(control => {
	control.addEventListener('click', () => {
		let idx = [...controls].findIndex(c => c === control);
		activeSlide = idx;

		changeSlides();

		clearInterval(int);
		int = setInterval(changeSlides, 4000);
	});
});


// Navbar JS 
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page's URL path
    const currentPage = window.location.pathname;

    // Select all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    // Loop through each link
    navLinks.forEach(link => {
        // Compare the href with the current page path
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


