import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export function schedulesDay() {
    //Obtem a data do input
    const date = selectedDate.value;
    //Os horarios disponveis
    hoursLoad({date});
}