const testimonials=[
"RACKYWEB GLOBAL transformed our online brand completely.",
“Professional luxury design and business communication.”,
“An outstanding premium media experience for startups.”
];

let current=0;

setInterval(()=>{
const text=document.getElementById('testimonial-text');
current=(current+1)%testimonials.length;
text.style.opacity='0';

setTimeout(()=>{
text.innerText=testimonials[current];
text.style.opacity='1';
},400);

},4000);

window.addEventListener('scroll',()=>{
document.querySelectorAll('.glass').forEach(card=>{
const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){
card.style.transform='translateY(0px)';
card.style.opacity='1';
}
});
});