/**
 * PRELOADER
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

/**
 * MOBILE NAVBAR
 * 
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

function sendOTP() {
    // Generate and send OTP logic can be added here
    // For this example, let's assume a simple alert is shown as the OTP
    var otp = generateOTP(); // Replace this with actual OTP generation logic
    alert('OTP sent to user: ' + otp);
}

function generateOTP() {
    // Generates a random 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000);
}

function verifyOTP() {
    var enteredOTP = document.getElementById('otp').value;
    var expectedOTP = document.getElementById('otp').value;/*Your logic to get expected OTP for the user (e.g., from a server database)*/

    if (enteredOTP === expectedOTP) {
        // If OTP matches, initiate file download
        downloadFile();
    } else {
        alert('Incorrect OTP. Please try again.');
    }
}

function downloadFile() {
    // Replace with your file URL
    var fileUrl = 'https://example.com/your-file-download-path';
    var link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'downloaded-file');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}