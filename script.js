function menuMobile() {
    const menuHamburguer = document.querySelector('#btnMobile');

    const iconClose = '<i class="fa-solid fa-xmark"></i>';
    const iconHamburguer = '<i class="fa-solid fa-bars"></i>';
    const menuList = document.getElementById('mobile');


    if (!menuList === menuList.classList.contains('open')) {
        menuList.classList.add('open');
        document.querySelector('#mobile').style.display = "flex";
        menuHamburguer.innerHTML = iconClose;

    } else {
        menuList.classList.remove('open');
        document.querySelector('#mobile').style.display = "none";
        menuHamburguer.innerHTML = iconHamburguer;
    }
}


// Modal
// function openModal(){
//     const btnLogin = document.querySelector('#btnLogin');
//     console.log('')
// }
const btnLogin = document.querySelector('#btnLogin').addEventListener('click', () =>{
    const modal = document.querySelector('.modalLoginContainer')
    modal.style.display = "flex";
})