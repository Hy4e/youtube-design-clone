const burger = document.getElementById('burger')



switcher = true

burger.addEventListener('click', (e)=>{
    const videoNav = document.getElementById('video-nav')
    console.log("pizda")
    if(switcher === true){
        videoNav.style.display = "none"
     
    }
    else{
        videoNav.style.display = "block"
    }
    switcher = !switcher
})