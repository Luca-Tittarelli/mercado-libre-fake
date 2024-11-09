const img = document.getElementById('main-banner')

function changeBanner(){
    if(innerWidth < 700){
        img.src = './img/banner-movil.webp'
        console.log(img.src)
    }
    else{
        img.src = './img/banner.webp'
    }
}
window.addEventListener('resize', changeBanner)
changeBanner()