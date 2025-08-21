// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//apabila klik menu
document.querySelector('#menu-icon').onclick = ()=>{
    navbarNav.classList.toggle('active');
};
//klink diluar menu 
const menu= document.querySelector('#menu-icon');

document.addEventListener('click',function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
