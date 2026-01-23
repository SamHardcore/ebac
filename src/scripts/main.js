document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);
        let numeroAleatiorio = Math.random() * numeroMaximo;
        numeroAleatiorio = Math.floor(numeroAleatiorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatiorio;
        document.querySelector('.resultado').style.display = 'block';
    }) 
});