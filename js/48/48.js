function calculo() {
    let n1 = parseFloat(document.getElementById("n1").value)|| 0;
    let n2 = parseFloat(document.getElementById("n2").value)|| 0;
    let n3 = parseFloat(document.getElementById("n3").value)|| 0;
    let n4 = parseFloat(document.getElementById("n4").value)|| 0;
    let n5 = parseFloat(document.getElementById("n5").value)|| 0;

    let media = (n1 + n2 + n3 + n4 + n5) / 5;
    document.getElementById("media").innerText = `A média das notas é: ${media}`;
}