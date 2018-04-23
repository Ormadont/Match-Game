let MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

$(document).ready(()=>{



});

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {

  const ar1 = []; //первый исходный массив вида 112233...
  for (let i=0; i < 8; i++) {
    ar1.push(i+1); ar1.push(i+1);
  }

  const ar2 = []; //второй массив, полученный из случайных элементов исходного массива
  while (ar1.length>0) {
    const r = Math.floor(Math.random()*ar1.length); //рандомный индекс первого массива
    const rand_i = ar1.splice(r,1) //удалённый элемент (массив) первого массива для второго массива
    ar2.push(rand_i[0]);
  }

  return ar2;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
