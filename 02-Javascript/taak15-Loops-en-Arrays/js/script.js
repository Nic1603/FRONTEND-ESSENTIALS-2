var spelersScore = [];
var rondePunten = [];

//Bepaalt het aantal spelers, tussen 1 en 10.
function getRandomAantalSpelers(){
    return Math.floor(Math.random()*10+1);
}

//vult de spelersScore array met 0;
for (let i = 0; i < getRandomAantalSpelers(); i++) {
    spelersScore.push(0);
}

//Bepaalt een random aantal punten voor een ronde tussen 0 en 100
function getRandomScore(){
    return Math.floor(Math.random()*100+1);
}

//Vult de rondePunten array met een random aantal punten tussen 0 en 100
for (let i = 0; i < spelersScore.length; i++) {
    console.log(i);
    rondePunten.push(getRandomScore());
}

//Schrijf hieronder je code
