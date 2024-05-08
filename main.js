$(document).ready(function(){
    

    document.querySelector('form button').addEventListener('click', function(e){

    })

    $('form button').on('submit', function(e){
        console.log('eu estoi ok')
        e.preventDefault()
        
    })

    $('form button').click(function(){ //abre a parte da tabela
        $('section').slideDown()
        $('table').slideDown()
        
    })

    $('section button').click(function(){ // fecha a tabela
        $('section').slideUp()
    })

    

    
})