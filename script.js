/* Fixed Particles Settings to solve "Big Circles" issue */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100 },
    "color": { "value": "#1e40af" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.2 },
    "size": { "value": 3, "random": true }, /* Small professional nodes */
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#3b82f6",
      "opacity": 0.2,
      "width": 1
    },
    "move": { "enable": true, "speed": 2 }
  }
});

/* Direct Login Function (No Alerts) */
function handleLogin(event) {
    event.preventDefault();
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const role = document.getElementById('role').value;

    if (user === 'admin' && pass === 'admin' && role === 'admin') {
        window.location.href = "admin_dashboard.html"; // Immediate transition
    } else {
        alert("Invalid Access!");
    }
}
