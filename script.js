window.addEventListener('scroll',()=>{
document.querySelectorAll('.card,.market-card,.stat-card').forEach(el=>{
const top=el.getBoundingClientRect().top;

if(top < window.innerHeight - 50){
el.style.opacity='1';
el.style.transform='translateY(0px)';
}
});
});

console.log('RACKYWEB GLOBAL MEDIA PREMIUM LOADED');
