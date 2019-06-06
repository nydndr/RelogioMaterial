setInterval(()=>{
  let tempoSegundos = moment().format('ss');
  let tempoMinutos = moment().format('mm');
  let tempoHoras = moment().format('h');

  tempoSegundos++;

  if(tempoSegundos > 59){
    tempoSegundos = 0;
    tempoMinutos++;
    if(tempoMinutos > 59){
      tempoMinutos = 0;
      tempoHoras++;
      if(tempoHoras === 24){
        tempoDia ++;
         if(tempoDia > 31){
           tempoDia = 1;
           tempoMes++;
            if(tempoMes > 12){
              tempoMes = 1;
              tempoAno++;
            }
         }
        tempoHoras = 0;
        tempoMinutos = 0;
        tempoHoras = 0;
      }
    }
  }

  rodaPonteiros(tempoSegundos, tempoHoras, tempoMinutos);

  let horarioEl = document.querySelector("#relogio");
  horarioEl.innerHTML = tempoHoras + ":" + tempoMinutos + ":" + tempoSegundos;
  horarioEl.innerHTML += " | " + moment().format("MMM Do YY");

}, 1000);

//---------------------------------------

function rodaPonteiros(tempoSegundos, tempoHoras, tempoMinutos)
{
  let ponteiroSegundos = document.querySelector("#ponteiroSegundos");
  let ponteiroMinutos = document.querySelector("#ponteiroMinutos");
  let ponteiroHoras = document.querySelector("#ponteiroHoras");

  ponteiroSegundos.style.transform = `rotate(${tempoSegundos * 6}deg)`;
  ponteiroHoras.style.transform = `rotate(${tempoHoras * 30}deg)`;
  ponteiroMinutos.style.transform = `rotate(${tempoMinutos * 6}deg)`;
}
