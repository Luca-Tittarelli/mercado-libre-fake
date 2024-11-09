const nav = document.querySelector('nav')
const buttons = nav.querySelectorAll('button')
const sections = document.querySelectorAll('section')
let selectedSection = 'inicio'

buttons.forEach(b =>{
    b.addEventListener('click', ()=>{
        sections.forEach(s =>{
            if(s.getAttribute('id') === b.value){
                selectedSection = b.value;
            }
            setDisplays()
        })
    })
})
function setDisplays(){
    sections.forEach(s =>{
        if(selectedSection === s.getAttribute('id')){
            s.style.display = ''
        }else{
            s.style.display = 'none'
        }
    })
}
setDisplays()