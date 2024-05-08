$(document).ready(function(){
    //adicona um ouvinte no evento de clique
    $('form button').ready(function(){
        $("form button").click(function(e){ 
            // inpede que a página atualize o formulário 
            e.preventDefault()
            
            //abre a tabela
            $('section').slideDown()
            $('table').slideDown()
        })

        $('section button').click(function(){
            //fecha a tabela
            $('section').slideUp()
        })
    })
})