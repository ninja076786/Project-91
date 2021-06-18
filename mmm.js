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
question_player="player_1";
answer_player="player_2";
function check(){
    var num1=document.getElementById("number_input_1").value;
    var num2=document.getElementById("number_input_2").value;
    var acal_answ=parseInt(num1)*parseInt(num2);
    get_answer=document.getElementById("input_check_box").value
    if(get_answer==acal_answ){
updateplayer1score=player_1_score+1
document.getElementById("player_1_score").innerHTML=updateplayer1score
    }
    else{
        updateplayer2score=player_2_score+1
        document.getElementById("player_2_score").innerHTML=updateplayer2score  
    }
    if(question_player=="player1"){
        question_player="player_2"
        document.getElementById("question_turn").innerHTML=numn2
    }
    else{
        question_player="player_1"
        document.getElementById("question_turn").innerHTML=numn1 
    }
}
