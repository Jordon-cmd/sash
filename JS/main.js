// First particle layer
particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#e83e8c" }, // Romantic pink color
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: { value: 0.5, random: false },
      size: { value: 4, random: true },
      line_linked: { enable: true, distance: 150, color: "#e83e8c", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    retina_detect: true,
  });
  
  // Second particle layer with a complementary color
  particlesJS("particles-js-2", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#ffb6c1" }, // Light pink color to complement the main particles
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: { value: 0.3, random: false },
      size: { value: 6, random: true },
      line_linked: { enable: true, distance: 120, color: "#ffb6c1", opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1.5, direction: "none", random: false, straight: false, out_mode: "out" },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8, speed: 3 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
  