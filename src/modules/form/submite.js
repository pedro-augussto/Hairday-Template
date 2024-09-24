import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//Data atual para o input

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e a transforma a data minima para a atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;



form.onsubmit = (event) => {
    //Prevenindo comportamento de recarrega a pagina
    event.preventDefault();

    try {
        //Recuperando o nome do cliente
        const name = clientName.value.trim();

        if(!name){
            return alert("Informe o nome do cliente.");
        }

        //Recuperando a hora selecionada
        const hourSelected = document.querySelector(".hour-selected");

        if(!hourSelected){
            return alert("Selecione a hora.");
        }

        //Recuperando somente a hora
        const [hour] = hourSelected.innerText.split(":");

        //Insere a hora com a data
        const when = dayjs(selectedDate.value).add(hour, "hour");

        //Gerar um id
        const id = new Date().getTime();

        console.log({
            id,
            name,
            when,
        })

    } catch (error) {
        alert("Não foi possivel agendar o horario.");
        console.log(error);
    }
}