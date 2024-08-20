//seleciona uma lista com todos os buttons com a classe toggle-nav
const btsToggleNav = document.querySelectorAll('button.toggle-nav')
const nv = document.querySelector('nav')

btsToggleNav.forEach(function(bt){
  bt.addEventListener('click', function(){
    nv.classList.toggle('open')
  })
})