
const gridContainer = document.querySelector('.grid-container');
const btnGenerate = document.querySelector('.btn-generate');
const difficulty = document.getElementById('choose');
let score = 0;
let arrayBombs = [];
const numBombs = 16;
let cellNumbers;
let youWin;


btnGenerate.addEventListener('click', function (){
  let difficultyValue = difficulty.value;
  
  if(difficultyValue === 'easy'){
    easy();   
  } else if(difficultyValue === 'medium'){
    medium();
  } else if(difficultyValue === 'hard'){
    hard();
  }
})



///// FUNCTION /////

function easy(){
  reset();
  cellNumbers = 100;
  
  // genero 100 square con un ciclo for
for (let i = 1; i <= 100; i++) {
  const square = mySquare(i);
  gridContainer.append(square);
};

getBombs();

}

function medium(){
  reset();
  cellNumbers = 81;
  // genero 81 square con un ciclo for
for (let i = 1; i <= 81; i++) {
  const square = mySquare(i);
  gridContainer.append(square);
  square.classList.add('medium');
}

getBombs();

}

function hard(){
  reset();
  cellNumbers = 49;
  // genero 49 square con un ciclo for
for (let i = 1; i <= 49; i++) {
  const square = mySquare(i);
  gridContainer.append(square);
  square.classList.add('hard');
}

getBombs();

}


function mySquare(index){
  const sq = document.createElement('div');
  sq.className = 'square'; 
  // creo una proprietà custom per sq e la chiamo _sqID 
  sq._sqID = index;

  sq.addEventListener('click', function(){
    checkBomb(this);
    this.classList.add('clicked')
    score++;
    winner();

  console.log(index);
  })

  return sq
}

// function random number 
function getRandomNumber(min, max){

  const randomNumber = Math.round(Math.random() * (max - min) + min);

  return randomNumber;

}

// funzione crea bombe
function getBombs(){
  const max = 16;
  while (arrayBombs.length < max){
    let bomb = getRandomNumber(1, cellNumbers);
    
    if(!arrayBombs.includes(bomb)){
      arrayBombs.push(bomb);
    }
  }
  return arrayBombs;
}

// funzione verifica bombe 
function checkBomb(sq) {
  if (arrayBombs.includes(sq._sqID)) {
    sq.classList.add('bomb');
    youWin = false;
    showBombs()
    result()
  }
}

// funzione mostra tutte le bombe 
function showBombs() {
  const allGrid = document.querySelectorAll('.square')
  let counter = 0;

  for (let n = 0; n < arrayBombs.length; n++) {
    for (let i = 0; i < allGrid.length; i++) {
      if (allGrid[i]._sqID === arrayBombs[counter]) {
        allGrid[i].classList.add('bomb');
        allGrid[i].innerHTML = '<i class="fa-solid fa-burst fa-xl"></i>';
      }
    }
    counter++;
  }
}

function winner(){
  const win = document.querySelectorAll('.square');
  if(win.length === (cellNumbers - numBombs)){
    youWin = true;
    result()
  }
}

function result(){
  const message = document.createElement('div');
  message.className = 'finish';

  if(youWin){
    message.classList.add('winner');
    message.innerHTML = ` YOU WIN!<br>Score:<br>${score}/${cellNumbers}`;
  } else{
    message.classList.add('loser');
    message.innerHTML = ` YOU LOSE!<br>Score:<br>${score}/${cellNumbers}`;

  }

  gridContainer.append(message);

}



function reset(){
  gridContainer.innerHTML = '';
  score = 0;
  arrayBombs.splice(0);
}