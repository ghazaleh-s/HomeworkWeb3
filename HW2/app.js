var computer="";
var key=true;
var user="";
var a="";
var chance=Math.random()*3;
const div=document.getElementById('output');
const PlayerOne=document.getElementById('playerOne');
const PlayerTwo=document.getElementById('playerTwo');
const result=document.getElementById('result');
const fin=document.getElementById('finish');
if(chance>0 && chance<1){
    computer+="rock";
}else if(chance>=1 && chance<2){
    computer+="paper";
}else{
    computer+="scissors";
}


function compare (c,u){
    if(c==u){
        return "It's a tie!!"
    }else if(c==="rock"){
        if(u==="paper"){
            return "You win"
        }else if(u=="scissors"){
            return "You lose!!!"
        }else {
            return "Error!"
        }
    }else if(c==="paper"){
        if(u==="rock"){
            return "You lose!!!"
        }else if(u=="scissors"){
            return "You win"
        }else {
            return "Error!"
        }
    }else if(c==="scissors"){
        if(u==="rock"){
            return "You win"
        }else if(u=="paper"){
            return "You lose!!!"
        }else {
            return "Error!"
        }
    }
}
PlayerOne.innerHTML+='<h2> Computer: </h2>'+ '<br>'
PlayerTwo.innerHTML+='<h2> User: </h2>'+ '<br>'
result.innerHTML+='<h2> Result: </h2>'+ '<br>'
while(key){
    user=prompt("Please choose:Rock,Scissors or Paper.If you want to exit press E!!").toLowerCase();
   while(user!="rock" &&  user!="scissors" && user!="paper"){
        if(user=="e"){
            key=false;
            break;
        }else{
            user=prompt("Please choose correctly:Rock,Scissors or Paper.If you want to exit press E!!").toLowerCase();
        }
    }
if(user!="e"){
    PlayerOne.innerHTML+= computer + '<br>'
    PlayerTwo.innerHTML+= user + '<br>'
    result.innerHTML+= compare(computer,user) + '<br>';
}else{
    PlayerOne.innerHTML+= "-" + '<br>'
    PlayerTwo.innerHTML+= "-" + '<br>'
    result.innerHTML+= "-";
}   
a=prompt("Do you want to continue playing this game?If yes press Y otherwise play N.").toLowerCase();
if(a=="n"){
    key=false;
}
}
fin.innerHTML+='<h1> See you later </h1>';






   