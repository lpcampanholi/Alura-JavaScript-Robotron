/*document.querySelector('#calcular').addEventListener('click', () => {
    console.log('Fui Clicado')
})*/

const botao = document.querySelector("#calcular")
const frase = document.querySelector(".resultado")

botao.addEventListener("click", (evento) => {
  frase.innerText = "Fui Clicado"
})
