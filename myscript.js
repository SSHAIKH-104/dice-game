//getting players names.
//var player1=prompt("Enter name of player1: ");
//var player2=prompt("Enter name of player2: ");
//displaying playes name on the webpage.
var arr;
var img1;
var img2;
var player1;
var player2;

//collecting data 


document.getElementById("change").addEventListener('click', assign_names );

function assign_names() {

    player1=document.querySelector("#player1").value;
    player2=document.querySelector("#player2").value;
    document.querySelector("#p1").textContent=player1;
    document.querySelector("#p2").textContent=player2;
    document.querySelector(".winner").textContent=player1 + " VS " + player2;
    
}   

document.querySelector("#play").addEventListener("click", game_start);  


function game_start() {
    arr=game_again();
    image_set(arr[0],arr[1]);
    document.querySelector(".winner").textContent=Winner(arr[0],arr[1]);        
}


function Winner(d1,d2)  {
    var who_won;

    if (d1 > d2) {
        who_won="🚩" + player1 +" wins!";
    }
    else if (d1 < d2) {
        who_won=player2 +" wins! 🚩";
    }
    else {
        who_won="draw! ";
    }

    return who_won;
}


function image_set(d1,d2 ){
    img1="images/" + "dice" + d1.toString()+".png";
    img2="images/" + "dice" + d2.toString()+".png";
    document.querySelector(".img1").setAttribute("src", img1);
    document.querySelector(".img2").setAttribute("src", img2);
}

function game_again(){
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;
    return [dice1,dice2];
}



