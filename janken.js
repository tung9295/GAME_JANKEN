var user_score = 0;
var computer_score = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result = document.getElementById("result");
const ba_div = document.getElementById("b");
const choki_div = document.getElementById("c");
const gu_div = document.getElementById("g");
const smallUserWord = "User".fontsize(3);
const smallCompWord = "Comp".fontsize(3);

function computer_choiced() {
  let computer_random = Math.floor((Math.random()*3));
  switch (computer_random) {
    case 0 : return "b";
    case 1 : return "c";
    case 2 : return "g";
  }
}

function convertToWord(word) {
  switch (word) {
    case "b" : return "BAR";
    case "c" : return "CHOKI";
    case "g" : return "GUU";
  }
}

function draw(user, comp) {
  result.innerHTML = convertToWord(user) + smallUserWord + " DRAW WITH " + convertToWord(comp) + smallCompWord;
  document.getElementById('user_label').classList.add('yellow');
  setTimeout(function() {document.getElementById('user_label').classList.remove('yellow')}, 300);
  document.getElementById('computer_label').classList.add('yellow');
  setTimeout(function() {document.getElementById('computer_label').classList.remove('yellow')}, 300);
  document.getElementById(user).classList.add('yellow-glow');
  setTimeout(function() {document.getElementById(user).classList.remove('yellow-glow')}, 300);
}

function win(user, comp) {
  result.innerHTML = convertToWord(user) + smallUserWord + " WIN " + convertToWord(comp) + smallCompWord;
  document.getElementById('user_label').classList.add('green');
  setTimeout(function() {document.getElementById('user_label').classList.remove('green')}, 300);
  document.getElementById(user).classList.add('green-glow');
  setTimeout(function() {document.getElementById(user).classList.remove('green-glow')}, 300);
  user_score ++;
}

function lose(user, comp) {
  result.innerHTML = convertToWord(user) + smallUserWord + " LOSE " + convertToWord(comp) + smallCompWord;
  document.getElementById('computer_label').classList.add('red');
  setTimeout(function() {document.getElementById('computer_label').classList.remove('red')}, 300);
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function() {document.getElementById(user).classList.remove('red-glow')}, 300);
  computer_score ++;
}

function comparision(user, comp) {
  switch(user + comp) {
    case "bb" :
    case "cc" :
    case "gg" :
      draw(user, comp); break;
    case "bg" :
    case "cb" :
    case "gc" :
      win(user, comp); break;
    case "gb" :
    case "bc" :
    case "cg" :
      lose(user, comp); break;
  }
  console.log(user);
  console.log(comp);
  userScore_span.innerHTML = user_score;
  computerScore_span.innerHTML = computer_score;
}

function user_choiced(user_choiced) {
  var user = user_choiced;
  comparision(user, comp);
}

ba_div.addEventListener('click', function() {
  comp = computer_choiced();
  user_choiced("b");
})

choki_div.addEventListener('click', function() {
  comp = computer_choiced();
  user_choiced("c");
})

gu_div.addEventListener('click', function() {
  comp = computer_choiced();
  user_choiced("g");
})
