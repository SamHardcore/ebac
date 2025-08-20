const form = document.getElementById("meuFormulario");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const mensagemValida = "Formulário Válido"
const mensagemInvalida = "Formulário Inválido"

form.addEventListener('submit' , function(e) {
    e.preventDefault();


const valorA = Number(campoA.value);
const valorB = Number(campoB.value);

if(valorB > valorA ) {
    const containerMensagemValida = document.querySelector('.form-valid')
    containerMensagemValida.innerHTML = mensagemValida;
    containerMensagemValida.style.display = 'flex';
}
else {
    const containerMensagemInvalida =  document.querySelector('.form-valid')
    containerMensagemInvalida.innerHTML = mensagemInvalida;
    containerMensagemInvalida.style.display = 'flex';
}

campoA.value = '';
campoB.value = '';

});