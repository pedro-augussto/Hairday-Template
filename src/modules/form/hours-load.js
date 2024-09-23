import dayjs from "dayjs";

import { oppeningHours } from "../../utils/oppening-hours.js";


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

    })
}