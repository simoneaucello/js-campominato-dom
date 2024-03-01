
const gridContainer = document.querySelector('.grid-container');
const btnGenerate = document.querySelector('.btn-generate');
const difficulty = document.getElementById('choose');
let score = 0;
let arrayBombs = [];
const numBombs = 16;
let cellNumbers = 100;
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
  // genero 100 square con un ciclo for
for (let i = 1; i <= 100; i++) {
  const square = mySquare(i);
  gridContainer.append(square);
};

getBombs();



// creazione del ciclo che mi genera l'array con numeri casuali per le bombe   


}

function medium(){
  reset();
  // genero 81 square con un ciclo for
for (let i = 1; i <= 81; i++) {
  const square = mySquare(i);
  gridContainer.append(square);
  square.classList.add('medium');
}
}

function hard(){
  reset();
  // genero 49 square con un ciclo for
for (let i = 1; i <= 49; i++) {
  const square = mySquare(i);
  gridContainer.append(square);
  square.classList.add('hard');
}
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








function reset(){
  gridContainer.innerHTML = '';
}