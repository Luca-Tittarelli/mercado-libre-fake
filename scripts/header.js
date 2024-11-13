const button = document.querySelector('#responsive-button')
const nav = document.querySelector('#main-nav')

button.addEventListener('click', ()=>{
    console.log('a')
    nav.classList.toggle('responsive')
})
nav.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => nav.classList.toggle('responsive')));
