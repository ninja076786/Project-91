function goto(){
var nummo1=document.getElementById("player1_name_input_1").value;
var nummo2=document.getElementById("player2_name_input_2").value;
  localStorage.setItem("nummo1",nummo1);
  localStorage.setItem("nummo2",nummo2);
  window.location="moneyy.html";
}
