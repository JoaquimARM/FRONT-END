//capturar eventos no formulario
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',function(e){//a funçao aguarda o usuario clicar no butao
    e.preventDefault();//muda o comportamento padrao do formulario que estamos usando

    const inputpeso= e.target.querySelector('#peso');
    const peso =parseFloat(inputpeso.value);

    const inputaltura= e.target.querySelector('#altura');
    const altura=parseFloat(inputaltura.value);

    const imc = calcularImc(peso,altura)
    const classificacao = tabelaIMC(imc)
    resultado(classificacao,imc)


    console.log(peso)
    console.log(altura)
    console.log(imc)
    console.log(classificacao)

})

//função para calcular o imc e retornar o seu valor

function calcularImc(peso,altura){
    let imc = (peso/(altura**2)); //formula do imc
    return imc.toFixed(2); //tofixed para formatar casa decimal
}


//função para classificar em qual grau de imc a pessoa esta

function tabelaIMC(imc){
    const classificacao = ['abaixo do peso','peso normal','sobrepeso','obesidade grau I','obesidade grau II','obesidade grau III']

    if (imc >= 39.9) return classificacao[5];
    else if ((imc <= 39.9) && (imc >= 35)) return classificacao[4];
    else if ((imc <= 34.9) && (imc >= 30)) return classificacao[3];
    else if ((imc <= 29.9) && (imc >= 25)) return classificacao[2];
    else if ((imc <= 24.9) && (imc >= 18.6)) return classificacao[1];
    else if (imc <= 18.5) return classificacao[0];

    
}


function resultado(msg1,msg2){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = msg1 + " "
    resultado.innerHTML += msg2
}