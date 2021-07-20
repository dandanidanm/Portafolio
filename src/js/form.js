const $form = document.querySelector('#form');

export const formulario = ()=>{
  $form.addEventListener('submit',async(e)=>{
  e.preventDefault();
  const form = new FormData(this);
  
  const response = await fetch(this.CaretPosition, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  });
  if(response.ok){
    //agregar algo bonito en vez de alert
    this.reset()
    alert('gracias por contactarme')
  }
});
};