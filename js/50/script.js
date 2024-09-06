function calculo(){
    // Limpa o resultado anterior
    document.getElementById('result').value;
    
    // Pega os valores dos inputs e a operação escolhida
    const n1 = document.getElementById('n1').value || 0;
    const n2 = document.getElementById('n2').value || 0;
    const operacao = (document.getElementById('operacao').value);
    let result;

    // Troca os valores dos inputs
    switch(operacao){
        case "soma" : 
            result = "SOMA: " + parseFloat(n1) + parseFloat(n2);
            break;
        case "subtracao" :
            result = "SUBTRAÇÃO: " + parseFloat(n1) - parseFloat(n2);
            break;
        case "multiplicacao" :
            result = "MULTIPLICAÇÃO: " + parseFloat(n1) * parseFloat(n2);
            break;
        case "divisao" :
            if(n2 == 0){
                result = "Não é possível dividir por zero!";
            }else{
                result = "DIVISÃO: " + parseFloat(n1) / parseFloat(n2);
                break;
            }
        //executado caso nenhuma operação seja executada
        default:
            document.getElementById("result").innerText = result;
        break;
    }
    // Mostra o resultado na tela
    document.getElementById('result').innerText = result;
}