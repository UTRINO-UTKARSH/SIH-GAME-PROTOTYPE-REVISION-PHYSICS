document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("startQuiz");
    if (btn) {
        btn.addEventListener("click", function() {
            window.location.href = "/quiz"; // <-- Use a route, not an EJS file path
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("en");
    if (btn) {
        btn.addEventListener("click", function() {
            window.location.href = "/play"; // <-- Use a route, not an EJS file path
        });
    }
});