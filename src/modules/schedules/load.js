import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedules/show.js"

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
    //Obtem a data do input
    const date = selectedDate.value;

    //Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date });

    //Exibe os agendamentos
    schedulesShow({ dailySchedules });

    //Os horarios disponveis
    hoursLoad({date, dailySchedules});
}