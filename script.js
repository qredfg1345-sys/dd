/* --- Particles.js Configuration for RailRoute Central --- */
particlesJS("particles-js", {
  "particles": {
    /* Set the number of nodes in the web */
    "number": { 
      "value": 100, 
      "density": { "enable": true, "value_area": 800 } 
    },
    /* Node color: Navy Blue */
    "color": { "value": "#1e40af" }, 
    "shape": { "type": "circle" },
    "opacity": { "value": 0.3, "random": false },
    /* Randomize node sizes for a more organic look */
    "size": { "value": 3, "random": true },
    /* Connect nodes with technical web lines */
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#3b82f6", /* Web lines color: Tech Blue */
      "opacity": 0.2,
      "width": 1
    },
    /* Movement speed and behavior */
    "move": { 
      "enable": true, 
      "speed": 2, 
      "direction": "none", 
      "random": false, 
      "straight": false, 
      "out_mode": "out", 
      "bounce": false 
    }
  },
  /* Interaction settings for user engagement */
  "interactivity": {
    "detect_on": "canvas",
    "events": { 
      "onhover": { "enable": true, "mode": "grab" }, /* Link lines follow cursor */
      "onclick": { "enable": true, "mode": "push" }, /* Add nodes on click */
      "resize": true 
    }
  },
  /* Enhance visual quality on high-resolution displays */
  "retina_detect": true
});
