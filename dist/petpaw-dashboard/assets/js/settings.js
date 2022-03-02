// Toggle show and hide nav items
function navFunction() {
    var x = document.getElementById("nav-items-sub");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Make nav items disappear when clicking outside of nav button and nav items
window.addEventListener('mouseup', function(event) {
    var navButton = document.getElementById('user');
    var navItems = document.getElementById('nav-items-sub');
    if (event.target != navButton && event.target.parentNode != navButton && event.target != navItems && event.target.parentNode != navItems) {
        navItems.style.display = 'none';
    }
});