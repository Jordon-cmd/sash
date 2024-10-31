// Initialize AOS for scroll animations
AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
});

// Initialize Particles.js for the background
particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ff6f61" },
        shape: { type: "circle" },
        opacity: { value: 0.6, random: true },
        size: { value: 5, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", out_mode: "bounce" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});
