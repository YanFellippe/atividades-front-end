function trocarImagens() {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    if (getComputedStyle(image1).zIndex === '1') {
        image1.style.zIndex = '0';
        image2.style.zIndex = '1';
    } else {
        image1.style.zIndex = '1';
        image2.style.zIndex = '0';
    }
}