function gerarNumeroAleatorio(max, min) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

export default gerarNumeroAleatorio;