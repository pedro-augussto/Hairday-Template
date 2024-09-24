import dayjs from "dayjs";

import { oppeningHours } from "../../utils/oppening-hours.js";

const hours = document.getElementById("hours");

export function hoursLoad({date}){
    const oppening = oppeningHours.map((hour) => {
        //Recupera somenta as horas
        const [scheduleHour] = hour.split(":");


        //Adiciona a hora na data e verifica se esta no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());
        
        //Define se o horario esta disponivel
        return {
            hour,
            available: isHourPast,
        }

    });
    
    //Renderizar os horarios
    
    oppening.forEach(({hour , available}) => {
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
}

function hourHeaderAdd(title){
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header);
}