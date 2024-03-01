
const gridContainer = document.querySelector('.grid-container');
const btnGenerate = document.querySelector('.btn-generate');
const difficulty = document.getElementById('choose');


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
}
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
  sq._sqID = '';

  sq.addEventListener('click', function(){

    this.innerHTML = (!this.classList.add('clicked'))
                      ? this.innerHTML = this._sqID
                      : this.innerHTML = '';

  console.log(index);
  })

  return sq
}



function reset(){
  gridContainer.innerHTML = '';
}