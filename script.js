// Para mostrar o Menu mobile
function menuMobile() {
    const menuHamburguer = document.querySelector("#btnMobile");

    const iconClose = '<i class="fa-solid fa-xmark"></i>';
    const iconHamburguer = '<i class="fa-solid fa-bars"></i>';
    const menuList = document.getElementById("mobile");

    if (!menuList === menuList.classList.contains("open")) {
        menuList.classList.add("open");
        document.querySelector("#mobile").style.display = "flex";
        menuHamburguer.innerHTML = iconClose;
    } else {
        menuList.classList.remove("open");
        document.querySelector("#mobile").style.display = "none";
        menuHamburguer.innerHTML = iconHamburguer;
    }


}

    // Para quando clicar fechar o menu
    const menuMobileList = document.querySelector('#mobile');
    const menuSections = document.querySelectorAll('#mobile a');
    menuSections.forEach(item => {
        item.addEventListener('click', () => {
        //    Colocar a logica aqui para quando clicar fechar.
            
        })
    })

// Para armazenar os dados de login -> Armazenar no banco de dados;
// Mudar os inputs para o de cadastro

const criarUsuario = document.querySelector('#loginSubmit').addEventListener('click', () => {

    const usuario = document.querySelector("#usuario").value;
    const senha = document.getElementById("senha").value;
    const validacao = document.querySelector('.validacaoInput');


    const usuarioCompleto = {
        usuario,
        senha
    };

    if (usuario == undefined && senha == undefined) {
        validacao.style.display = 'block'
        console.log(senha)

    } else {
        validacao.style.display = 'none';

    }
    console.log(usuarioCompleto)
})




// Modal
const btnLogin = document.querySelector("#btnLogin").addEventListener("click", () => {
    const modal = document.querySelector(".modalLoginContainer");
    modal.style.display = "flex";

});

// Btn para cancelar (sair)
const btnCancel = document.querySelector("#cancelar").addEventListener("click", () => {
    const modal = document.querySelector(".modalLoginContainer");
    modal.style.display = "none";
});

// tirar o evento de submit
const modal = document.querySelector("#formModal").addEventListener("submit", (e) => {
    e.preventDefault();
});