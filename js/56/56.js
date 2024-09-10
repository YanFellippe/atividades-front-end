function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function mudarCorFundo() {
    const corAtual = document.body.style.backgroundColor;
    
    // Se a cor atual for branca ou não estiver definida, mudamos para uma cor aleatória
    if (corAtual === "rgb(255, 255, 255)" || corAtual === "") {
        const corAleatoria = gerarCorAleatoria();
        document.body.style.backgroundColor = corAleatoria;
    } else {
        // Caso contrário, volta para branco
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
    }
}
