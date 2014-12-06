var game = new Game();

function Game(){

    console.log("Spelet instansieras")
    this.p1 = new Player("Glenn");
    this.p2 = new Player("Ada");
    this.deck = new Deck()
    
    this.p1.takeCard(this.deck);
    this.p2.takeCard(this.deck);
    this.p1.takeCard(this.deck);
    this.p2.takeCard(this.deck);
    this.p1.takeCard(this.deck);
    this.p2.takeCard(this.deck);
}

function Card(name, attack, hp, cost){

    this.name = name;
    this.attack = attack;
    this.hp = hp;
    this.cost = cost;
    console.log("Kortet " + this.name + " instansieras")
}

function Player(name){

    this.name = name;
    this.hp = 30;
    this.hand = [];
    console.log("Spelare " + this.name + " instansieras")
    
    this.takeCard = function (deck){
    console.log(this.name +  " drar ett kort, det blev " + deck.cards[0].name);
    this.hand.push(deck.cards.shift())

    }
}



function Deck(){
    console.log("Korthög instansieras")
    this.cards = [new Card("Potted plant", 1, 5, 10),
                  new Card("Hjördis hund", 4, 2, 99),
                  new Card("Potted plant", 1, 5, 10),
                  new Card("Potted plant", 1, 5, 10),
                  new Card("Potted plant", 1, 5, 10),
                  new Card("Potted plant", 1, 5, 10),
                  new Card("Potted plant", 1, 5, 10),
                  new Card("Potted plant", 1, 5, 10),
                  new Card("Potted plant", 1, 5, 10)];
                


}