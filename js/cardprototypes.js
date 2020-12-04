//Constructor


/**************** GALINA ****************/

function Card(_id){
    this.id = _id;

    this.div = document.createElement('div');
    this.div.className = 'card';

    this.frontFaceImage = document.createElement('img');
    this.backImage = document.createElement('img');

    this.section = document.getElementsByClassName('game-container')[0];

    this.div.appendChild(this.frontFaceImage);
    this.div.appendChild(this.backImage);
    this.section.appendChild(this.div);
}

Card.prototype.addDivAttribute = function(attributeName, attributeValue){
    this.div.setAttribute(attributeName, attributeValue)
}

Card.prototype.addFrontImageClass = function(className){
    this.frontFaceImage.className = className;
}

Card.prototype.addBackImageClass = function(className){
    this.backImage.className = className;
}

Card.prototype.addBackImageSource = function(source){
    this.backImage.src = source;
}

let allCards=[];
let frontFacePairClass = 1;

for(let k=0; k<2; k++){    // här gör vi 2 stackar med 12 kort vardera 
    for(let i=1; i<=12; i++){
        allCards[i] = new Card(i);

        allCards[i].addDivAttribute('data-framework', i); //för varje kort lägger vi till ett attribute data-framework=i
        allCards[i].addFrontImageClass('front-face pair-' + frontFacePairClass); //för varje front img  lägger vi till två attributer front-face pair- concatenate med  "frontFacePairClass"  som okar sin tal om det är jämnt tal (%2==0)
        allCards[i].addBackImageClass('back-face');//for varje front img  lägger vi till  klass back-face
        allCards[i].addBackImageSource('/img/gift-cards.png');//för varje front img  lägger vi till  source gift-cards.png
        
        if(i % 2 === 0){
            frontFacePairClass++;
        }
    }
}