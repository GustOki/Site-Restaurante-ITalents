//editando btn favoritar
let coracao = document.querySelector(".bi-heart-fill");
coracao.addEventListener('click', function(event){
    //dentro da target tudo que estiver o nome de I
    if(event.target.nodeName === "I"){
        event.target.classList.toggle("red");
        //estrutura pronta do JS:
    }
});