async function perguntas(todas_as_perguntas,id, nome_avaliado){

     respostas= [];

     perguntas_iniciais = todas_as_perguntas;

     todas_as_perguntas = JSON.parse(todas_as_perguntas);

     for(var i=0; i< todas_as_perguntas.length;i++){

       aux_resposta = "resposta"+i;
       var titulo = todas_as_perguntas[i].titulo;
       var texto = todas_as_perguntas[i].texto;
       var options = todas_as_perguntas[i].options;
       var tipo = todas_as_perguntas[i].tipo;

       if(tipo=="texto"){

         const { value: resposta } = await Swal.fire({
           title: titulo,
           allowOutsideClick: false,
           allowEscapeKey: false,
           text: texto,
           input: 'text',
           showCancelButton: true,
           inputValidator: (value) => {
             if (value.length<2) {
               return 'Sua resposta precisa ter no mínimo 3 caracteres!'
             }
           }
         })

         if (resposta) {
           respostas.push({resposta:resposta});
         }
         else{
           respostas.push({resposta:" "});
         }
       }

       else  if(tipo=="checkbox" || tipo=="radio"){

         const { value: resposta } = await Swal.fire({
           title: titulo,
           allowOutsideClick: false,
           allowEscapeKey: false,
           text: texto,
           input: 'select',
           inputOptions: options,
           inputPlaceholder: 'Selecione uma opção',
           showCancelButton: true,
         });

         if (resposta) {
           respostas.push({resposta:resposta});
           // p2();

         }
       }

       else  if(tipo=="simounao"){

         const { value: resposta } = await  Swal.fire({
           title: titulo,
           text: texto,
           allowOutsideClick: false,
           allowEscapeKey: false,
           text: texto,
           type: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Sim',
           cancelButtonText: 'Não'
         });
         if (resposta) {
           respostas.push({resposta:"Sim"});
           // p2();
         }
         else{
           respostas.push({resposta:"Não"});
         }

       }

       else if(tipo=="satisfacao"){




         if(texto.length>0){
           titulo = titulo + " - " + texto;
         }


         // $("#myModal").modal();

         // var callback = function(result) {


       const wrapper = document.createElement('div');
       wrapper.innerHTML = '<iframe name="fotos" align="left" frameborder="0" style="height:220; width: 100% !important;" scrolling="auto" src="estrelas.html" >';
       var a =0;
       const { value: resposta } = await  Swal.fire({
         title: titulo,
         text: texto,
         allowOutsideClick: false,
         allowEscapeKey: false,
         type: 'info',
         html: wrapper,
         focusConfirm: false,
         confirmButtonText:
         '<i class="fa fa-thumbs-up"></i> Próximo!',
         confirmButtonAriaLabel: 'Thumbs up, great!',

       });
       //
       //   onOpen: function() { $('.swal2-confirm').attr('id','btnConfirm')},
       // });

       if (resposta) {
         var resposta2= localStorage.getItem("estrela");
         if(resposta2){
           respostas.push({resposta:resposta2});
         }
         else{
           respostas.push({resposta:"Regular"});
         }
         localStorage.clear();
       }

     }
}
     // }
     // }
     encerrar(todas_as_perguntas,id, nome_avaliado);
   }

   //FUNÇÃO PARA LER VALOR DE ESTRELAS.HTML
   function salvar_valor(numero){
     localStorage.setItem("estrela", numero);
   }

   function mudar_funcao(){
     var tipo = document.getElementById("tipo").value;
     if(tipo=="checkbox" || tipo=="radio"){
       document.getElementById("opcao").style.display= "block";
     }
     else{
       document.getElementById("opcao").style.display= "none";

     }
   }
