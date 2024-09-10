function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function mudarCorFundo() {
    const corAtual = document.body.style.backgroundColor;
    
    if (corAtual === "rgb(255, 255, 255)" || corAtual === "") {
        const corAleatoria = gerarCorAleatoria();
        document.body.style.backgroundColor = corAleatoria;
    } else {
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
    }
}
