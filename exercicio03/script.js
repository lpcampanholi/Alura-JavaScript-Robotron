const lista = document.querySelector('ul')
const btnOk = document.querySelector('#btnOk')

document.querySelector("#botao").addEventListener('click', () => {
    lista.setAttribute('data-lista','mostrar')
    btnOk.setAttribute('data-lista', 'mostrar')

})

btnOk.addEventListener('click', () => {
    lista.setAttribute('data-lista','esconder')
    btnOk.setAttribute('data-lista','esconder')  
})