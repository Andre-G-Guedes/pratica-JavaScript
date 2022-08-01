let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    let form = document.querySelector("#form-adiciona");     
    let paciente = obtemFormularioPaciente(form);   

    let erros = validaPaciente(paciente); 

    if(erros.length > 0){
        exibeMensagemDeErro(erros);
        return;
    }   
    
    adicionaPacienteNaTabela(paciente);  
    
    form.reset();
    let mensagesErro = document.querySelector("#mensagem-erros");
    mensagesErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");  
    tabela.appendChild(pacienteTr); 
}

function exibeMensagemDeErro(erros) {
    let ul = document.querySelector("#mensagem-erros");
    ul.innerHTML = "";

    erros.forEach(erro => {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemFormularioPaciente(form) {
     let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value) 
    }
    return paciente;
}

function montaTr(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");  

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    let erros = [];

    if(paciente.nome.length == 0) erros.push("Nome não pode estar em branco!");
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!");        
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida!");
    if(paciente.gordura.length == 0) erros.push("Gordura do paciente não pode estar em branco!");
    if(paciente.peso.length == 0) erros.push("Peso não pode estar em branco!");
    if(paciente.altura.length == 0) erros.push("Altura não pode estar em branco");

    return erros;
}

