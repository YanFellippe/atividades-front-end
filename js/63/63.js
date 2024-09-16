function calcular(){
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const operacao = (document.getElementById('operacao').value) || 0;
    let resultado;

    switch(operacao){
        case "soma":
            resultado = "A soma é: " + (num1 + num2);
            break;
        case "subtracao":
            resultado = "A subtração é: " + (num1 - num2);
            break;
        case "multiplicacao":
            resultado = "A multiplicação é: " + (num1 * num2);
            break;
        case "divisao":
            if(num2!=0){
                resultado = "A divisão é: " + (num1 / num2);
            } else {
                resultado = "Não é possível realizar a divisão por zero.";
            }
            break;
        default:
            resultado = "Operação inválida.";
            break;
    }

    document.getElementById('resultado').innerText = resultado;
}