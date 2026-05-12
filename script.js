
window.addEventListener('scroll',()=>{
document.querySelectorAll('.card').forEach(el=>{
const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-50){
el.style.opacity='1';
el.style.transform='translateY(0px)';
}
});
});

console.log('RACKYWEB PREMIUM Loaded');
