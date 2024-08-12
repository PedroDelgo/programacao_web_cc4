let elementoNome = document.getElementById("nome").value;
let botaoSubmeter = document.getElementById("botaoSubmeter");

botaoSubmeter.addEventListener("click",submeter);

console.log(elementoNome);

function submeter (){
    alert("função submeter");
}

