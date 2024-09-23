import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//Data atual para o input

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e a transforma a data minima para a atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;



form.onsubmit = (event) => {
    //Prevenindo comportamento de recarrega a pagina
    event.preventDefault();

    console.log("Enviado")
}