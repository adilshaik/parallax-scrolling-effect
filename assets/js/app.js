console.log("Hello")

let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let nav = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 1 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1 + 'px';
    btn.style.marginTop = value * 2.5 + 'px';
    nav.style.top = value * 0.5 + 'px';
})