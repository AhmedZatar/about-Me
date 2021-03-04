'use strict';
let mark=0;
let ar=['n','q1','q2','q3','q4','q5','q6','q7'];
ar[0] = prompt('What is your name ?');
alert('Welcome ' + ar[0] + ' i want play with you a guessing game about facts about me (Ahmed)');
alert('Answer with yes,no,y or n');

function noCorrect(q){

  if (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y') {
    alert('Your answer is incorrect');
    console.log(mark);
  }
  else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n') {
    alert('Your answer is correct');
    mark++;
    console.log(mark);

  }
  else {
    alert('Wrong input !!!');
  }

}

function yesCorrect(q){

  if (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y') {
    alert('Your answer is correct');
    mark++;
    console.log(mark);
  }
  else if (q.toLowerCase() === 'no' || q.toLowerCase() === 'n') {
    alert('Your answer is incorrect');
    console.log(mark);

  }
  else {
    alert('Wrong input !!!');
  }

}

ar[1] = prompt('Was Ahmed born in Amman ? ');
noCorrect(ar[1]);
ar[2] = prompt('Was Ahmed born in 1997 ? ');
yesCorrect(ar[2]);
ar[3] = prompt('Is Ahmed hobby playing video games ?');
yesCorrect(ar[3]);
ar[4] = prompt('Did Ahmed graduate from the Middle East University ?');
yesCorrect(ar[4]);
ar[5] = prompt('Is Ahmed goal to become a lawyer ?');
noCorrect(ar[5]);

function question6(q){
  q = prompt('How old is Ahmed ?');
  for(let i=0; i<4;i++){
    if(parseInt(q)===23){
      alert('You guessed it right');
      i=4;
      mark++;
      console.log(mark);
    }else if(parseInt(q)<23){
      alert('Try again !! too low');
      q = prompt('How old is Ahmed ?');
    }else if(parseInt(q)>23){
      alert('Try again !! too high');
      q = prompt('How old is Ahmed ?');
    }
  }
}

question6(ar[6]);
console.log(mark);

let a7=0;
let favegame=['rust','minecraft','rome total war','battlefield 4','battlefield 1','grand theft auto v','league of legends'];
function question7(q){
  q = prompt('Give me name of a video game, Ahmed like it');
  for(let ii=0; ii<6;ii++){

    for(let iii=0;iii<=7;iii++){
      if(q.toLowerCase()===favegame[parseInt(iii)]){
        alert('You guessed it right');
        a7=1;
        ii=6;
        iii=8;
        mark++;
        console.log(mark);
      }
    }if (ii<5){
      alert('Wrong answer try agian');
      q = prompt('Give me name of a video game, Ahmed like it');

    }
  }

}

question7(ar[7]);
if(a7===0){
  alert('You could not guess the video games that Ahmed liked');
}
alert('you will see all the possible correct answers in the main page');

alert(ar[0] +' You guessed '+mark +'/7');
let a = document.getElementById('n');
a.innerText = ar[0] ;
