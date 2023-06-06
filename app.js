const hambruger = document.querySelector('.header .navbar .navlist .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const menu_item = document.querySelectorAll('.header .navbar .navlist ul li a');
const header = document.querySelector('.header.container');

hambruger.addEventListener('click',()=>{
    hambruger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});

menu_item.forEach((item)=> {
    item.addEventListener('click',() => {
        hambruger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });    
});