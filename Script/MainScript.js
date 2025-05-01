$(document).ready(documentReady);


function documentReady(){
    
const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY; 
	
    window.addEventListener("scroll", () =>{
        if (lastScrollY < window.scrollY){
            nav.classList.add("nav--hidden");
			
        } else{
            nav.classList.remove("nav--hidden");
			
        }
        
        lastScrollY = window.scrollY;
    
    });

	
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');


hamMenu.addEventListener('click', () => {
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
	
})
    


}


