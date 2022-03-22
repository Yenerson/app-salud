let botonToogle = document.getElementById('botonToogle');
let menuToogle = document.getElementById('menuToogle');

botonToogle.addEventListener('click', (e)=>{
    e.preventDefault();
    menuToogle.classList.toggle('toggleMenu');
});