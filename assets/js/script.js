var exibirNumeroAtual = document.getElementById('numeroAtual');
var numeroAtual = 0;

function incrementar(){
    if(numeroAtual < 10){
        numeroAtual = numeroAtual + 1;
        exibirNumeroAtual.innerHTML = numeroAtual;
    }else{
        numeroAtual += 0;
    }
}
function decrementar(){
    if(numeroAtual > 0){
        numeroAtual = numeroAtual - 1;
        exibirNumeroAtual.innerHTML = numeroAtual;
    }else{
        numeroAtual -= 0;
    }
}