    const div = document.querySelector('div');
    const button = document.querySelector('button');

    button.addEventListener("click", function mudaCSS(){
        div.style.backgroundColor = 'gray';
        div.style.color = 'lightblue';
    });
