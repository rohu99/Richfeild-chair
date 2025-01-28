window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust scroll value as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function () {
    const loginButton = document.getElementById('login');
    if (window.scrollY > 50) { // Adjust scroll value as needed
        loginButton.classList.add('scrolled-button');
    } else {
        loginButton.classList.remove('scrolled-button');
    }
});
window.addEventListener('scroll', function () {
    const headElement = document.getElementById('head');
    if (window.scrollY > 50) { // Adjust scroll value as needed
        headElement.classList.add('scrolled-head');
    } else {
        headElement.classList.remove('scrolled-head');
    }
});
window.addEventListener('scroll', function () {
    const contentElement = document.getElementById('content');
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        contentElement.classList.add('hidden');
    } else {
        contentElement.classList.remove('hidden');
    }
});
setTimeout(function () {
    const contentElement = document.getElementById('content');
    contentElement.classList.add('hidden');
}, 2000);

// function showBrand(brand) {
//     alert("Showing products for " + brand);
// }

// Function to handle the intersection of elements with the viewport
function handleScrollAnimation(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}

// Setting up the IntersectionObserver
const observer = new IntersectionObserver(handleScrollAnimation, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observing elements
const elementsToAnimate = document.querySelectorAll('.one, #description, #brand-buttons');
elementsToAnimate.forEach(element => observer.observe(element));

// Automatically trigger the modal when the page loads
window.onload = function () {
    var signUpModal = new bootstrap.Modal(document.getElementById('signUpModal'));
    signUpModal.show();
};

// Handle form submission
document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    var signUpModal = bootstrap.Modal.getInstance(document.getElementById('signUpModal'));
    signUpModal.hide(); // Hide the modal on successful sign up
});


function showBrand(brandId) {
    // Hide all brand sections
    document.querySelectorAll('.brand-details-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected brand section
    document.getElementById(brandId).style.display = 'block';
}
// team start
AOS.init({
    duration: 1000,  // Animation duration in milliseconds
    easing: 'ease-in-out',  // Animation easing style
    once: false,  // Set to false to trigger animations on scroll up and down
    offset: 120  // Optional: offset (in px) for when animations start
});
// script.js
$(document).ready(function() {
$(".owl-carousel").owlCarousel({
loop: true,
margin: 15,
nav: false, 
dots: false,
autoplay: true,
autoplayTimeout: 4000,
responsive: {
  0: { items: 1 },
  600: { items: 3 },
  1000: { items: 4 },
}
});

// Custom buttons for previous and next
$('.carousel-prev').click(function() {
$('.owl-carousel').trigger('prev.owl.carousel');
});

$('.carousel-next').click(function() {
$('.owl-carousel').trigger('next.owl.carousel');
});
});

$(function () {
$.scrollUp({
    scrollDistance: 50,
    scrollSpeed: 1000,
    scrollText: 'TOP',
    scrollImg: true,
});
});
/*!
* scrollup v2.4.1
* Url: http://markgoodyear.com/labs/scrollup/
* Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
* License: MIT
*/
!function (l, o, e) { "use strict"; l.fn.scrollUp = function (o) { l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o)) }, l.fn.scrollUp.init = function (r) { var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r), f = !1; switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", { id: p.scrollName, href: "#top" }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({ display: "none", position: "fixed", zIndex: p.zIndex }), p.activeOverlay && l("<div/>", { id: p.scrollName + "-active" }).css({ position: "absolute", top: p.scrollDistance + "px", width: "100%", borderTop: "1px dotted" + p.activeOverlay, zIndex: p.zIndex }).appendTo("body"), p.animation) { case "fade": s = "fadeIn", t = "fadeOut", c = p.animationSpeed; break; case "slide": s = "slideDown", t = "slideUp", c = p.animationSpeed; break; default: s = "show", t = "hide", c = 0 }i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function () { l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1) }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function (o) { o.preventDefault(), l("html, body").animate({ scrollTop: a }, p.scrollSpeed, p.easingType) }) }, l.fn.scrollUp.defaults = { scrollName: "scrollUp", scrollDistance: 300, scrollFrom: "top", scrollSpeed: 300, easingType: "linear", animation: "fade", animationSpeed: 200, scrollTrigger: !1, scrollTarget: !1, scrollText: "Scroll to top", scrollTitle: !1, scrollImg: !1, activeOverlay: !1, zIndex: 2147483647 }, l.fn.scrollUp.destroy = function (r) { l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r) }, l.scrollUp = l.fn.scrollUp }(jQuery, window, document);
