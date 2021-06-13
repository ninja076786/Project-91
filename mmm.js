 numn1=localStorage.getItem("numm1");
 numn2=localStorage.getItem("numm2");
function send(){
    document.getElementById("name_1").innerHTML=numn1+" : ";
    document.getElementById("name_2").innerHTML=numn2+" : ";
    document.getElementById("question_turn").innerHTML="Question Turn: "+numn1+" !";
    document.getElementById("answer_turn").innerHTML="Answer Turn: "+numn2+" !";
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    var num1=document.getElementById("number_input_1").value;
    var num2=document.getElementById("number_input_2").value;
    var acal_answ=parseInt(num1)*parseInt(num2);
    number="<h4>This Guess This Equation That: "+ numn1 +" Has Wrote! "+"</h4>";
    nunu="<h4> The Equation Is: "+num1+" x "+num2+" </h4>";
    answer="<br> Type The Answer Here: <input type='text' id='input_check_box'placeholder='Type Your Answer Here'>";
    button_check="<br><br><button class='btn btn-success' onlick='check()'>Check Your Answer</button>";
    var the_diver=number+nunu+answer+button_check;
    document.getElementById("output").innerHTML=the_diver;
    document.getElementById("name_1").innerHTML=numn1+" : ";
    document.getElementById("name_2").innerHTML=numn2+" : ";
    document.getElementById("question_turn").innerHTML="Question Turn: "+numn1+" !";
    document.getElementById("answer_turn").innerHTML="Answer Turn: "+numn2+" !";
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}
