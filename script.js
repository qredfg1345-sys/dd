/* 1. Background Web Effect */
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": "#1e40af" },
        "line_linked": { "enable": true, "color": "#3b82f6", "opacity": 0.2 }
    }
});

/* 2. Login & Redirection Logic */
function handleLogin(event) {
    event.preventDefault();
    
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const role = document.getElementById('role').value;

    if (user === 'admin' && pass === 'admin' && role === 'admin') {
        alert("Success: Moving to Admin Terminal");
        window.location.href = "admin_dashboard.html";
    } 
    else if (user === 'staff' && pass === 'staff' && role === 'staff') {
        alert("Success: Moving to Staff Terminal");
        window.location.href = "staff_dashboard.html";
    } 
    else {
        alert("Access Denied: Invalid Credentials");
    }
}
