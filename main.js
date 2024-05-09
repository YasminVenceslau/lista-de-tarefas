$(document).ready(function(){
    //adicona um ouvinte no evento de clique
    $('form button').ready(function(){
        $("form button").click(function(e){ 

            //verifica se o campo tarefa está vazio

                if($("#tarefa").val() === "" || $("#data").val() === ""){
                    alert('Por Favor, preencha os campos a baixo.')
                }else{

            // inpede que a página atualize o formulário 
                e.preventDefault()
            
            //verifica se a tarefa ja existe

                var tarefaNova = $("#tarefa").val()
                var tarefaE = []

                $("#corpo_da_tabela tr").each(function(){
                    var tarefaExistente = $(this).find('td:first').text();
                    tarefaE.push(tarefaExistente)
                })

                if (tarefaE.includes(tarefaNova)){
                    alert('Está tarefa já foi adicionada.')
                }else{

                //abre a tabela
                    $('section').slideDown()
                    $('table').slideDown()
                //Adiciona a linha na tabela
                    criarLinha() 
                //Limpa os campos do formulário após adicionar a tarefa
                    limparLinha() 
                //Ao clicar nos itens da lista, adicione um efeito que aplique uma linha em cima do texto (text-decoration: line-through).
                    riscar()
                    
                }



            
            
            }
    })
        
        $('section button').click(function(){
            //fecha a tabela
            $('section').slideUp()
            //atualiza a página
            window.location.reload()
            
        })
    })

    



    // adicionar botao de tarefa á tabela

    function criarLinha(){ 
        //cria a linha
        var tarefa = $("#tarefa").val()
        var data = $("#data").val()
        var dificuldade = $("#dificuldade").val()




        const novaTabela = $('<tr>   </tr> ')

            $(` 
                    <td>${tarefa}</td>
                    <td>${data}</td>
                    <td>${dificuldade}</td>
                    <td> <input type="checkbox" name="feito" id="feito"></td>

            `).appendTo(novaTabela)

        $(novaTabela).appendTo("tbody")
        }
    //limpa a tabela  
        function limparLinha(){
            $("#tarefa").val('')
            $("#data").val('')
            $("#dificuldade").val('')
        }

     //add um amnipulador de enventos para o click do checked box

        $(document).on('click', "#feito", function(){ 
            //verifica se o checked box esta marcado
                if($(this).is(':checked')) {
            //adiciona a a classe do texto dentro da celula pai
                $(this).closest('td').siblings('td').addClass('riscado')
            }else { 
                //remove a classe do texto dentro da celula pai
                    $(this).closest('td').siblings('td').removeClass('riscado')

            }
        })


        

})