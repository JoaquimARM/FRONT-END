let images = []; /*criando uma lista vazia para guardar as imagens */

function carregarImagem(){
    const galeria = document.getElementById("galeria");
    galeria.innerHTML = '';

    images.forEach(imgURL=>{
        const img = document.createElement("img");
        img.src = imgURL;
        galeria.appendChild(img)
    });

}

function clicarimagem(){
    const imagemminiatura = document.querySelectorAll('#galeria img');
    imagemminiatura.forEach(imagemminiatura =>{
        imagemminiatura.addEventListener('click',function(){
            const imagemgrande = document.createElement('img');
            imagemgrande.src = this.src;
            imagemgrande.classList.add('imagemgrande');
            document.getElementById('imagem-grande-container').innerHTML='';
            document.getElementById('imagem-grande-container').appendChild(imagemgrande)
        })
    })

}



document.getElementById('arquivos').addEventListener('change', function(event){
    const arquivo = event.target.files[0];
    const ler = new FileReader();

    ler.onload = function(e){
        const imgURL = e.target.result;
        images.push(imgURL);
        carregarImagem();
        clicarimagem();
    };

    

    ler.readAsDataURL(arquivo)
});