'use strict';
let ar=['n','q1','q2','q3','q4','q5','q6','q7'];
ar[0] = prompt('What is your name ?');
alert('Welcome ' + ar[0] + ' i want play with you a guessing game about facts about me (Ahmed)');
alert('Answer with yes,no,y or n');

ar[1] = prompt('Was Ahmed born in Amman ? ');
let a1 = 'any';
while (a1 === 'any') {
  if (ar[1].toLowerCase() === 'yes' || ar[1].toLowerCase() === 'y') {
    alert('Your answer is incorrect');
    console.log('The first question his answer is incorrect');
    a1 = 0;}
  else if (ar[1].toLowerCase() === 'no' || ar[1].toLowerCase() === 'n') {
    alert('Your answer is correct');
    console.log('The first question answered correctly');
    a1 = 1;}
  else {
    alert('Try answer with (yes or no )!!!');
    ar[1] = prompt('Was Ahmed born in Amman ? ');}


}

ar[2] = prompt('Was Ahmed born in 1997 ? ');
let a2 = 'any';
while (a2 === 'any') {
  if (ar[2].toLowerCase() === 'yes' || ar[2].toLowerCase() === 'y') {
    alert('Your answer is correct');
    console.log('The second question answered correctly');
    a2 = 1;}
  else if (ar[2].toLowerCase() === 'no' || ar[2].toLowerCase() === 'n') {
    alert('Your answer is incorrect');
    console.log('The second question his answer is incorrect');
    a2 = 0;}
  else {
    alert('Try answer with (yes or no )!!!');
    ar[2] = prompt('Was Ahmed born in 1997 ? ');}


}

ar[3] = prompt('Is Ahmed hobby playing video games ?');
let a3 = 'any';
while (a3 === 'any') {
  if (ar[3].toLowerCase() === 'yes' || ar[3].toLowerCase() === 'y') {
    alert('Your answer is correct');
    console.log('The third question answered correctly');
    a3 = 1;}
  else if (ar[3].toLowerCase() === 'no' || ar[3].toLowerCase() === 'n') {
    alert('Your answer is incorrect');
    console.log('The third question his answer is incorrect');
    a3 = 0;}
  else {
    alert('Try answer with (yes or no )!!!');
    ar[3] = prompt('Is Ahmed hobby playing video games ?');}


}

ar[4] = prompt('Did Ahmed graduate from the Middle East University ?');
let a4 = 'any';
while (a4 === 'any') {
  if (ar[4].toLowerCase() === 'yes' || ar[4].toLowerCase() === 'y') {
    alert('Your answer is correct');
    console.log('The fourth question answered correctly');
    a4 = 1;}
  else if (ar[4].toLowerCase() === 'no' || ar[4].toLowerCase() === 'n') {
    alert('Your answer is incorrect');
    console.log('The fourth question his answer is incorrect');
    a4 = 0;}
  else {
    alert('Try answer with (yes or no )!!!');
    ar[4] = prompt('Did Ahmed graduate from the Middle East University ?');}


}

ar[5] = prompt('Is Ahmed goal to become a lawyer ?');
let a5 = 'any';
while (a5 === 'any') {
  if (ar[5].toLowerCase() === 'yes' || ar[5].toLowerCase() === 'y') {
    alert('Your answer is incorrect');
    console.log('The fifth question his answer is incorrect');
    a5 = 0;}
  else if (ar[5].toLowerCase() === 'no' || ar[5].toLowerCase() === 'n') {
    alert('Your answer is correct');
    console.log('The fifth question answered correctly');
    a5 = 1;}
  else {
    alert('Try answer with (yes or no )!!!');
    ar[5] = prompt('Is Ahmed goal to become a lawyer ?');}

}

let a6=0;
for(let i=0; i<4;i++){
  ar[6] = prompt('How old is Ahmed ?');
  if(parseInt(ar[6])===23){
    alert('You guessed it right');
    i=4;
    a6=1;
    console.log('The 6th question answered correctly');
  }else if(parseInt(ar[6])<23){
    alert('Try again !! too low');
    a6=0;

  }else if(parseInt(ar[6])>23){
    alert('Try again !! too high');
    a6=0;
  }

}
if(a6===0){
  alert('You could not guess how old Ahmed, Ahmed is 23 years old');
  console.log('The 6th question his answer is incorrect');
}

let favegame=['rust','minecraft','rome total war','battlefield 4','battlefield 1','grand theft auto v','league of legends'];
console.log(favegame);
let a7=0;
for(let ii=0; ii<6;ii++){
  ar[7] = prompt('Give me name of a video game, Ahmed like it');
  for(let iii=0;iii<=7;iii++){
    if(ar[7].toLowerCase()===favegame[parseInt(iii)]){
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
alert(ar[0] +' You guessed '+mark +'/7');

let a = document.getElementById('n');
a.innerText = ar[0] ;
