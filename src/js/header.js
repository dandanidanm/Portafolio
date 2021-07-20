/* Evento Scroll para darle color al Header */
const $header = document.querySelector('.header');

export const changeHeader = () =>{
  document.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop > 1){
      $header.classList.add('header-color');
      console.log('hola')
    }
    if(document.documentElement.scrollTop < 1){
      $header.classList.remove('header-color');
    }
  })
}
