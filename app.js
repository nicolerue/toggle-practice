
//Step 1: Get elements that I will need to target 

const button = document.querySelector('.button-open')
const form = document.querySelector('.form-div')

button.addEventListener('click', function(){
  // if(form.classList.contains('form-hidden')){
  //   form.classList.remove('form-hidden');
  //   button.textContent = "close"
  // } else{
  //   form.classList.add('form-hidden')
  //   button.textContent = 'open'
  // }
  form.classList.toggle("form-hidden")
})


