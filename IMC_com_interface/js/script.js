//capturar eventos no formulario
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',function(e){//a funçao aguarda o usuario clicarno butao
    e.preventDefault();//muda o comportamento padrao do formulario que estamos usando

    const inputpeso= e.target.querySelector('#peso');
    const peso =parseFloat(inputpeso.value);

    const inputaltura= e.target.querySelector('#altura');
    const altura=parseFloat(inputaltura.value);

    const imc = calcularImc(peso,altura)

    console.log(peso)
    console.log(altura)
    console.log(imc)
})

//função para calcular o imc e retornar o seu valor

function calcularImc(peso,altura){
    let imc = (peso/(altura**2)); //formula do imc
    console.log(imc)
    return imc.toFixed(2); //tofixed para formatar casa decimal
}