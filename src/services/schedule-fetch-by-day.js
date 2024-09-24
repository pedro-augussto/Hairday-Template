import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay ({ date }) {
    try {
        //Fazendo a requisição
        const response = await fetch (`${apiConfig.baseURL}/schedules`);

        //Converte para JSON
        const data = await response.json();

        //Filtra pos agendamentos pelos dia selecionados
        const dailySchedules = data.filter((schedule) => 
            dayjs(date).isSame(schedule.when, "day")
        );

        return dailySchedules;
    } catch (error) {

        alert("Não foi possivel buscar os agendamentos do dia selecionado.");
        console.log(error);
    }
}