import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"
 
const periods = document.querySelectorAll(".period")


//Gerar evento clicl para cada lista (manha, tarde e noite)

periods.forEach((period) => {
    //Capturar o evento de clique na lista
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
          //Obtem a li pai do elemento clicado.
          const item = event.target.closest("li");  

          //Pega o id do agendamento para remover
          const {id} = item.dataset;
          
          //Confirma que o id foi selecionado
          if(id){
            //Confirma se o usuario quer cancelar
            const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
            
            if(isConfirm) {
                //Faz a requisição na API para cancelar
                await scheduleCancel({id});
                
                //Recarrega os agendamentos
                schedulesDay();
             };
            };
        };
    });
})