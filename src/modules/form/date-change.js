import { schedulesDay  } from "../schedules/load.js"

//Selecionar o input de data.

const selectedDate = document.getElementById("date");

selectedDate.onchange = () => schedulesDay();