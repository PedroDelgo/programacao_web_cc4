let botaoSubmeter = document.getElementById("botaoSubmeter"); //criando um variavel pra tag html botao

botaoSubmeter.addEventListener("click",submeter); //criando um evento ao clicar no botao tem outros comandos possiveis de fazer 

function submeter (){ //função que vai ser usado quando o evento acontecer no caso ao clicar o botao
    let elementoNome = document.getElementById("nome").value; //aqui ele ira colocar o valor submetido nessa variavel o input esta la no html
    let elementoIdade = document.getElementById("idade").value;
    let elementoEmail = document.getElementById("email").value;
    console.log(elementoNome); //o console ira printar o nome inserido
    console.log(elementoIdade);
    console.log(elementoEmail);
    console.log(emailValidation(elementoEmail));
}

// TO DO coloar validação de emial no codigo so aceitar email validos

function emailValidation(elementoEmail){
    return /^\w+(\.\w+)*@\w+(\.\w+)+$/.test(elementoEmail) ;
}

