const btmenu = document.querySelector(".botao__menu")
const menu = document.querySelector(".menu-lateral")
const logoMenu = document.querySelector(".menu-logo")
const menuPerfil = document.querySelector(".menu-perfil")
const menuPerfilLista = document.querySelector(".menu-perfil__lista")

btmenu.addEventListener('click', () => {
    menu.classList.toggle("menu-lateral--ativo");
    logoMenu.classList.toggle("menu-logo-desativado");



})

menuPerfil.addEventListener('click', function(){
    
    menuPerfilLista.classList.toggle("menu-perfil__lista--mostra")
    
   
    
    console.log(menuPerfil)
})

