function calculo() {
    let n1 = parseFloat(document.getElementById("n1").value)|| 0;
    let n2 = parseFloat(document.getElementById("n2").value)|| 0;

    let diferenca = n1 - n2
    document.getElementById("diferenca").innerText = `A difderença dos números é: ${diferenca}`;
}