'use strict';
let n = prompt('What is your name ?');
alert('Welcome ' + n + ' i want play with you a guessing game about facts about me (Ahmed)');
alert('Answer with yes,no,y or n');

let q1 = prompt('Was Ahmed born in Amman ? ');
let a1 = 'any';
while (a1 === 'any') {
  if (q1.toLowerCase() === 'yes' || q1.toLowerCase() === 'y') {
    alert('Your answer is incorrect');
    // console.log('The first question his answer is incorrect');
    a1 = 0;}
  else if (q1.toLowerCase() === 'no' || q1.toLowerCase() === 'n') {
    alert('Your answer is correct');
    // console.log('The first question answered correctly');
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
    // console.log('The second question answered correctly');
    a2 = 1;}
  else if (q2.toLowerCase() === 'no' || q2.toLowerCase() === 'n') {
    alert('Your answer is incorrect');
    // console.log('The second question his answer is incorrect');
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
    // console.log('The third question answered correctly');
    a3 = 1;}
  else if (q3.toLowerCase() === 'no' || q3.toLowerCase() === 'n') {
    alert('Your answer is incorrect');
    // console.log('The third question his answer is incorrect');
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
    // console.log('The fourth question answered correctly');
    a4 = 1;}
  else if (q4.toLowerCase() === 'no' || q4.toLowerCase() === 'n') {
    alert('Your answer is incorrect');
    // console.log('The fourth question his answer is incorrect');
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
    // console.log('The fifth question his answer is incorrect');
    a5 = 0;}
  else if (q5.toLowerCase() === 'no' || q5.toLowerCase() === 'n') {
    alert('Your answer is correct');
    // console.log('The fifth question answered correctly');
    a5 = 1;}
  else {
    alert('Try answer with (yes or no )!!!');
    q5 = prompt('Is Ahmed goal to become a lawyer ?');}


}

let mark= parseInt(a1)+ parseInt(a2)+parseInt(a3)+ parseInt(a4)+parseInt(a5);
alert(n +' You guessed '+mark +'/5');

let a = document.getElementById('n');
a.innerText = n ;


