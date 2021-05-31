var ee1=localStorage.getItem("zaza1");
var ee2=localStorage.getItem("zaza2");
document.getElementById("name_1").innerHTML=ee1+" : ";
document.getElementById("name_2").innerHTML=ee2+" : ";
function send(){
    var num1=document.getElementById("number_input_1").value;
    var num2=document.getElementById("number_input_2").value;
    number="<h4>This Guess This Equation That: "+ zaza1 +" Has Wrote! "+"</h4>";
    nunu="<h4> The Equation Is: "+num1+" x "+num2+" </h4>";
    answer="<br> Type The Answer Here: <input type='text' placeholder='Type Your Answer Here'>";
    button_check="<br><br><button class='btn btn-success' onlick='check_the_answer()'>Check Your Answer</button>";
    var the_diver=number+nunu+answer+button_check;
    document.getElementById("output").innerHTML=the_diver;
       }