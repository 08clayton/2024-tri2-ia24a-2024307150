//seleciona uma lista com todos os buttons com a classe toggle-nav
  const btsToggleNav = document.querySelectorAll('button.toggle-nav')
  const nv = document.querySelector('nav')//seleciona o primeiro elemento do nav que ele encontrar

//o forEach é usado para iterar sobre cada botão dentro do node list para cada botão
    btsToggleNav.forEach(function(bt){
    bt.addEventListener('click', function(){ //add adiciona um ouvinte de de eventos que escuta o 'click' qnd for clicado
nv.classList.toggle('open')//qnd for clicado o código usa classList(adicions s classe 'open' aos elementos do nav)
  })
})