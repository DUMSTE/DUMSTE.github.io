function showMenu(toggle, menu){
    const toggleMenu = document.getElementById(toggle);
    const sideMenu = document.getElementById(menu);
    
    
    if(toggleMenu && sideMenu){
        toggleMenu.addEventListener('click', function(){
             sideMenu.classList.toggle('active-menu');   
    })
    }
}
showMenu("header-toggle", "header-menu");


const swiper = new Swiper(".mainscreen_container", {
    loop:true,
    effect: "coverflow",
    grabCursor: true,
    direction: "horizontal",
    keyboard: {
        enable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnIntrection: false,
    },
   speed: 2500,
    coverflowEffect:{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier:1,
    },


    cubeEffect:{
        shadow: true,
        slideShadows: false,
        shadowOffset:20,
        slideShadows:0,
    }  , 
    
       navigation: {
        prevEl: ".arrow-left",
        nextEl: ".arrow-right",
    }
});
