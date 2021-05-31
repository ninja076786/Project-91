function MUAHAHA(){
var numm1=document.getElementById("player1_name_input_1").value;
var numm2=document.getElementById("player2_name_input_2").value;
var acal_answ=parseInt(numm1)*parseInt(numm2);
  localStorage.setItem("numm1",numm1);
  localStorage.setItem("numm2",numm2);
  window.location="moneyy.html";
     }
