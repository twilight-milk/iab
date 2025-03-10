document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.et-hero-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Smooth scroll to the target section
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


//js for home slider navigation
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slider-card");
    const dots = document.querySelectorAll(".dot");

    function showSlide(n) {
        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.classList.remove("active"));
        slides[n].style.display = "flex";
        dots[n].classList.add("active");
    }

    function autoSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
        setTimeout(autoSlide, 3000);
    }

    showSlide(index);
    setTimeout(autoSlide, 3000);
});
