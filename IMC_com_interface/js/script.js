//capturar eventos no formulario
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',function(e){//a funçao aguarda o usuario clicarno butao
    e.preventDefault();//muda o comportamento padrao do formulario que estamos usando

    const inputpeso= e.target.querySelector('#peso');
    const peso =parseFloat(inputpeso.value);

    const inputaltura= e.target.querySelector('#altura');
    const altura=parseFloat(inputaltura.value);

    console.log(inputpeso);
    console.log(peso);

    console.log(inputaltura)
    console.log(altura)



})