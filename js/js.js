var horario = document.querySelector("#horario");
var data = document.querySelector("#data");

// Ponteiros
var ponteiroSegundos = document.querySelector("#ponteiroSegundos");
var ponteiroMinutos = document.querySelector("#ponteiroMinutos");
var ponteiroHoras = document.querySelector("#ponteiroHoras");

setInterval(() => {

  atualizaNumeros(moment().format('h:mm:ss'), moment().format('d/MM/YY'));
  atualizaPonteiros(moment().format('s'), moment().format('mm'), moment().format('h'));

}, 1000);

function atualizaNumeros(tempoHorario, tempoData)
{
  
  horario.textContent = moment().format('h:mm:ss');
  data.textContent = moment().format('MMM do YY');

}

function atualizaPonteiros(tempoSegundos, tempoHoras, tempoMinutos)
{

  ponteiroSegundos.style.transform = `rotate(${tempoSegundos * 6}deg)`;
  ponteiroHoras.style.transform = `rotate(${tempoHoras * 30}deg)`;
  ponteiroMinutos.style.transform = `rotate(${tempoMinutos * 6}deg)`;

}
