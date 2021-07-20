const menu = document.querySelector('.menu'),
      menuBtn = document.querySelector('.menu-btn');
   
export const btnBurger = () => {
  /* boton que activa y desactiva el menu */
  menuBtn.addEventListener('click',()=>{
    menuBtn.firstElementChild.classList.toggle('none');
    menuBtn.lastElementChild.classList.toggle('none');
    menu.classList.toggle('is-active');
  });
  /* Al dar click en un elemento del menu desactiva el menu */
  document.addEventListener('click',(e)=>{
    if(!e.target.matches('.menu a')) return false;
      menuBtn.firstElementChild.classList.remove('none');
      menuBtn.lastElementChild.classList.add('none');
      menu.classList.remove('is-active');

  })
};