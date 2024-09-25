import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

const hours = document.getElementById("hours");

export function hoursLoad({date, dailySchedules}){
    //Limpa a lista de horarios
    hours.innerHTML = "";

    //Obtem a lista de horarios ocupados
    const unavailableHours =  dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"));
    console.log(unavailableHours)

    const opening = openingHours.map((hour) => {
        //Recupera somenta as horas
        const [scheduleHour] = hour.split(":");


        //Adiciona a hora na data e verifica se esta no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());
        
        const available = !unavailableHours.includes(hour) && !isHourPast;

        //Define se o horario esta disponivel
        return {
            hour,
            available,
        }
    });
    //Renderizar os horarios
    
    opening.forEach(({hour , available}) => {
        const li = document.createElement("li");
        
        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");
        
        li.textContent = hour;

        if(hour === "9:00"){
            hourHeaderAdd("Manhã");
        } else if (hour === "13:00"){
            hourHeaderAdd("Tarde");
        }else if (hour === "18:00"){
            hourHeaderAdd("Noite");
        }

        hours.append(li);
    });


    //Adiciona o evento de click nos horarios disponiveis.
    hoursClick();
}

function hourHeaderAdd(title){
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header);
}