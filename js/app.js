/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navlist = document.getElementById('navbar__list');
const section = document.querySelectorAll("section");
// form all sections in array
const sections =Array.from(section);            




// create elements and append it to nav
for (s of sections){
    item = document.createElement("li");
    item.innerHTML = '<a href="#'+s.id+'" class = "menu__link " > '+s.dataset.nav+'</a>'
    navlist.appendChild(item)
}




// Add class 'active' to section when near top of viewport
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function(active){
        if(active.getBoundingClientRect().top>=-400 && active.getBoundingClientRect().top<=150){
            active.classList.add("your-active-class");
        }
        else{
            active.classList.remove("your-active-class");
        }
    });
};




//Scroll to anchor ID using scrollTO event
navlist.addEventListener("click",(e)=>{
    e.preventDefault();
    // use hash then slice it to get id for target section 
    let target =String(e.target.hash).slice(1);       
    document.getElementById(target).scrollIntoView({behavior:"smooth"}); 
});






