const pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++) {

   let paciente = pacientes[i];
    
    const peso = paciente.querySelector(".info-peso").textContent;
    
    const altura = paciente.querySelector(".info-altura").textContent;
    
    const tdImc = paciente.querySelector(".info-imc");
    
    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);
    
    if(!pesoEhValido) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(!alturaEhValida) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(pesoEhValido && alturaEhValida) {
        let imc = calculaImc(peso,altura);   
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if(peso >=0 && peso < 1000){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >=0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc (peso,altura) {
    let imc = 0;

    imc = peso/ (altura * altura);

    return imc.toFixed(2)
}




