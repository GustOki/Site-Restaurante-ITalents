// pega o btn
let btnAdd = document.querySelector('#addBtn');

// (login) criando evento de click para o btn, executando a function anonima
btnAdd.addEventListener("click", function(){
    // verifica se o input esta vazio
    const inputValue = document.querySelector('#input').value;
    if(inputValue === ""){
        alert("Você não preencheu todos os campos!");
    }else{
        //alert("Login realizado com sucesso!");
        document.querySelector("#mensagem-ok").insertAdjacentHTML(
            "afterend",
            `<div class="card-teste">
            <span>Login efetuado com sucesso!</span>
            </div>
            `
        );

        let mensagem = document.querySelector('.card-teste');
        setTimeout(() => {
            mensagem.style.display = "none";
        }, 3000);
    }

    //zerando o input do login
    document.querySelector('#input').value = "";
});



