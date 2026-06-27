/* SCROLL REVEAL ANIMATION */

const reveals = document.querySelectorAll('.reveal');

function revealSections() {

reveals.forEach(section => {

```
const windowHeight = window.innerHeight;
const sectionTop = section.getBoundingClientRect().top;

if(sectionTop < windowHeight - 100){
  section.classList.add('active');
}
```

});

}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

/* HERO BUTTON HOVER EFFECT */

const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {

btn.addEventListener('mouseenter', () => {
btn.style.transform = 'translateY(-4px)';
});

btn.addEventListener('mouseleave', () => {
btn.style.transform = 'translateY(0)';
});

});

/* FLOATING WHATSAPP PULSE */

const whatsapp = document.querySelector('.whatsapp-float');

if(whatsapp){

setInterval(() => {

```
whatsapp.animate(
  [
    { transform: 'scale(1)' },
    { transform: 'scale(1.12)' },
    { transform: 'scale(1)' }
  ],
  {
    duration: 1200
  }
);
```

}, 2500);

}
