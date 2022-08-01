let pacientesTabela = document.querySelectorAll("#tabela-pacientes");

pacientesTabela.forEach(paciente => {
    paciente.addEventListener("dblclick",function(event){
         event.target.parentNode.classList.add("fadeOut");

         setTimeout(function(){
            event.target.parentNode.remove();
         },500)

         
    });
});