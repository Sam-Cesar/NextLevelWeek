//Procurar o botão 
document.querySelector("#add-time")
//quando clicar no botão 
.addEventListener("click", cloneField)
//Exucutar uma ação 
function cloneField() {
    //Clonar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    //limpar os campos
    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEach(function(field) {
        field.value = ""
    });
    //Colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}

