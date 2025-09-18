
$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoTarefaNova = $('#endereco-tarefa-nova').val();
        const tarefaNova = $('<li></li>').text(enderecoTarefaNova);
        $('ul').append(tarefaNova);
        $('#endereco-tarefa-nova').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    })


})