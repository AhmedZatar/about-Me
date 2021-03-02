'use strict';
let n = prompt('What is your name ?');
alert('Welcome ' + n + ' i want play with you a guessing game about facts about me (Ahmed)');
alert('Answer with yes,no,y or n');

let q1 = prompt('Was Ahmed born in Amman ? ');
let a1 = 'any';
while (a1 === 'any') {
  if (q1.toLowerCase() === 'yes' || q1.toLowerCase() === 'y') {
    alert('Your answer is incorrect');
    console.log('The first question his answer is incorrect');
    a1 = 0;}
  else if (q1.toLowerCase() === 'no' || q1.toLowerCase() === 'n') {
    alert('Your answer is correct');
    console.log('The first question answered correctly');
    a1 = 1;}
  else {
    alert('Try answer with (yes or no )!!!');
    q1 = prompt('Was Ahmed born in Amman ? ');}


}

let q2 = prompt('Was Ahmed born in 1997 ? ');
let a2 = 'any';
while (a2 === 'any') {
  if (q2.toLowerCase() === 'yes' || q2.toLowerCase() === 'y') {
    alert('Your answer is correct');
    console.log('The second question answered correctly');
    a2 = 1;}
  else if (q2.toLowerCase() === 'no' || q2.toLowerCase() === 'n') {
    alert('Your answer is incorrect');
    console.log('The second question his answer is incorrect');
    a2 = 0;}
  else {
    alert('Try answer with (yes or no )!!!');
    q2 = prompt('Was Ahmed born in 1997 ? ');}


}

let q3 = prompt('Is Ahmed hobby playing video games ?');
let a3 = 'any';
while (a3 === 'any') {
  if (q3.toLowerCase() === 'yes' || q3.toLowerCase() === 'y') {
    alert('Your answer is correct');
    console.log('The third question answered correctly');
    a3 = 1;}
  else if (q3.toLowerCase() === 'no' || q3.toLowerCase() === 'n') {
    alert('Your answer is incorrect');
    console.log('The third question his answer is incorrect');
    a3 = 0;}
  else {
    alert('Try answer with (yes or no )!!!');
    q3 = prompt('Is Ahmed hobby playing video games ?');}


}

let q4 = prompt('Did Ahmed graduate from the Middle East University ?');
let a4 = 'any';
while (a4 === 'any') {
  if (q4.toLowerCase() === 'yes' || q4.toLowerCase() === 'y') {
    alert('Your answer is correct');
    console.log('The fourth question answered correctly');
    a4 = 1;}
  else if (q4.toLowerCase() === 'no' || q4.toLowerCase() === 'n') {
    alert('Your answer is incorrect');
    console.log('The fourth question his answer is incorrect');
    a4 = 0;}
  else {
    alert('Try answer with (yes or no )!!!');
    q4 = prompt('Did Ahmed graduate from the Middle East University ?');}


}

let q5 = prompt('Is Ahmed goal to become a lawyer ?');
let a5 = 'any';
while (a5 === 'any') {
  if (q5.toLowerCase() === 'yes' || q5.toLowerCase() === 'y') {
    alert('Your answer is incorrect');
    console.log('The fifth question his answer is incorrect');
    a5 = 0;}
  else if (q5.toLowerCase() === 'no' || q5.toLowerCase() === 'n') {
    alert('Your answer is correct');
    console.log('The fifth question answered correctly');
    a5 = 1;}
  else {
    alert('Try answer with (yes or no )!!!');
    q5 = prompt('Is Ahmed goal to become a lawyer ?');}

}
let q6;
let a6=0;
for(let i=0; i<4;i++){
  q6 = prompt('How old is Ahmed ?');
  if(parseInt(q6)===23){
    alert('You guessed it right');
    i=4;
    a6=1;
    console.log('The 6th question answered correctly');
  }else if(parseInt(q6)<23){
    alert('Try again !! too low');
    a6=0;

  }else if(parseInt(q6)>23){
    alert('Try again !! too high');
    a6=0;
  }

}
if(a6===0){
  alert('You could not guess how old Ahmed, Ahmed is 23 years old');
  console.log('The 6th question his answer is incorrect');
}
let q7;
let favegame=['rust','minecraft','rome total war','battlefield 4','battlefield 1','grand theft auto v','league of legends'];
console.log(favegame);
let a7=0;
for(let ii=0; ii<6;ii++){
  q7 = prompt('Give me name of a video game, Ahmed like it');
  for(let iii=0;iii<=7;iii++){
    if(q7.toLowerCase()===favegame[parseInt(iii)]){
      alert('You guessed it right');
      a7=1;
      ii=6;
      iii=8;
      console.log('The 7th question answered correctly');
    }
  }if (ii<5){
    alert('Wrong answer try agian');
  }
}
if(a7===0){
  alert('You could not guess the video games that Ahmed liked');
  console.log('The 7th question his answer is incorrect');
}
alert('you will see all the possible correct answers in the main page');

let mark= a1+a2+a3+a4+a5+a6+a7;
alert(n +' You guessed '+mark +'/7');

let a = document.getElementById('n');
a.innerText = n ;
