// function menuScroll(){
//     const scroll = document.querySelector('.header')
//     console.log('OI')
// }

const menuOpen = document.querySelector('#btnMobileOpen').addEventListener('click', () =>{
    const menuList = document.querySelector('.navMenuMobile')
    const btnClose = document.querySelector('#btnMobileClose');
    
    menuList.classList.toggle('open')
    btnClose.addEventListener('click', () =>{
        console.log('oi')
       
    })
   
})
