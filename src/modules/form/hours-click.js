export function hoursClick(){
    const hours = document.querySelector(".hour-available")

    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {

            //Remove a classe hour-selected de todas as li não selecionadas
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected");
            })
            //Adiciona a classe na li clicada.
            selected.targed.classList.add("hour-selected");
        })
    })

}