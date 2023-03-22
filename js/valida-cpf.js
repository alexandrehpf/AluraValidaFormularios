export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g, "");

    if(validaNumeorsRepetidos(cpf) || validaPrimeiroDigito(cpf,10,9) || validaPrimeiroDigito(cpf,11,10)){
        campo.setCustomValidity('Esse CPF não é valido');
    } 
}

function validaNumeorsRepetidos(cpf){
    const numerosRepeticos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ]

    return numerosRepeticos.includes(cpf);
}

function validaPrimeiroDigito(cpf,paran1,paran2){
    let soma = 0;
    let multiplcador = paran1;

    for (let tamanho = 0; tamanho < paran2; tamanho++) {
        soma += cpf[tamanho] * multiplcador;
        multiplcador--;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 1) {
        soma = 0;
    }
    return soma != cpf[paran2];
}

// function validaSegundoDigito(cpf){
//     let soma = 0;
//     let multiplcador = 11;

//     for (let tamanho = 0; tamanho < 10; tamanho++) {
//         soma += cpf[tamanho] * multiplcador;
//         multiplcador--;
//     }

//     soma = (soma * 10) % 11;

//     if(soma == 10 || soma == 1) {
//         soma = 0;
//     }
//     return soma != cpf[10];
// }