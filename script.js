const burger = document.getElementById('burger')



switcher = true

burger.addEventListener('click', (e)=>{
    const videoNav = document.getElementById('video-nav')
    if(switcher === true){
        videoNav.style.transform = "translateX(-200%)"
     
    }
    else{
        videoNav.style.transform = "translateX(0%)"
    }
    switcher = !switcher
})