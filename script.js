const result = document.querySelector('.result');
const current = document.querySelector('.current');
const roll_dice = document.querySelector('.roll-dice');
const hold = document.querySelector('.hold');
const dice = document.querySelector('.dice');
const img = document.querySelector("#myImage");


const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

let randomizer;

let array = [];

function displayRollDice () {
    randomizer = Math.floor((Math.random() * 6) + 1);
    const randomImage = images[randomizer -1 ];
    img.src = randomImage;
    result.innerHTML = `${randomizer}`;
};


function currentResult () {
    array.push(randomizer);
    let sum = array.reduce((sum, total) => sum + total, 0);
    current.innerHTML = sum;
};


function holdResult () {
   result.innerHTML = `${randomizer}`;
};

displayRollDice();


roll_dice.addEventListener("click", displayRollDice);

hold.addEventListener("click", () => {
    holdResult();
    currentResult();
});
