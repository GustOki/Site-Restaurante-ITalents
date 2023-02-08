// apagando produto do carrinho
let modal = document.querySelectorAll('.container');
let excluir = document.querySelectorAll('.btn-lixo');

for(let i = 0; i < excluir.length; i++) {
        excluir[i].addEventListener("click", function(event){
            if(!event.target.classList.contains('.btn-lixo')){
                modal[i].remove();
            }
        });
};

//incrementar e decrementar o número de produtos
let decrementar = document.querySelector(".btn_decrementar");
let incrementar = document.querySelector(".btn_incrementar");
let textoProduto = document.querySelector(".number");
let quantidadeProduto = parseInt(textoProduto.textContent);

incrementar.addEventListener("click", function(){
    quantidadeProduto++;
    textoProduto.innerHTML = quantidadeProduto;
});

decrementar.addEventListener("click", function(){
    if(quantidadeProduto <= 1) {
        alert("A quantidade de produto não pode ser menor que 1!")
    }else{
        quantidadeProduto--;
        textoProduto.innerHTML = quantidadeProduto;
    }
});
