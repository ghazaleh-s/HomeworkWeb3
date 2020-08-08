var array=[];
var arrays=[];


function cards(){
    for(var i=0;i<4;i++){
        array[i]=[];
        for(var j=0;j<13;j++){
            if(j==0){
                array[i][j]="A"
            }else if(j==10){
                array[i][j]="J"
            }else if(j==11){
                array[i][j]="Q"
            }else if(j==12){
                array[i][j]="K"
            }else{
                array[i][j]=j+1;
            }
        }
    }
    return array;
}

console.log(cards());

var hand1=[];
function hand(count){
    var i=0;
    var j=0;
    for(var c=0;c<count;c++){
        i=Math.floor(Math.random()*4);
        j=Math.floor(Math.random()*13);
        if(array[i][j]!="empty"){
        hand1[c]=array[i][j];
        array[i][j]="empty";
        console.log(i);
        console.log(j);  
        if(i==0){
            console.log("heart");  
        }else if(i==1){
            console.log("clubs"); 
        }else if(i==2){
            console.log("spade");
        }else{
            console.log("diamonds");
        }
    }else{
        c--;
    }
    }
    return hand1;
}
console.log(hand(2));
console.log(hand(2));
console.log(hand(5));



