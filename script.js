const nav = document.getElementById('navbar');

if (nav) {
    nav.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll("#navbar .dropdown");

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("mouseenter", function() {
            this.querySelectorAll(".dropdown-content").style.display = "block";
        });
        dropdown.addEventListener("mouseleave", function () {
            this.querySelectorAll("dropdown-content").style.display = "none";
        });
    });
});