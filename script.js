const burger = document.getElementsByClassName('burger')[0]



switcher = true

burger.addEventListener('click', (e)=>{
    const videoNav = document.getElementsByClassName('video-nav')[0]
    if(switcher === true){
        videoNav.style.transform = "translateX(-200%)"
     
    }
    else{
        videoNav.style.transform = "translateX(0%)"
    }
    switcher = !switcher
})