

function writeCards (names, event) {
  let newArray = [];
  for ( let i=0; i < 3; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return newArray;
}

function countDown (integer) {
  while (interger >=0) {
    console.log(integer--)
  }
}













/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts (gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`)
  }
  return gifts;
}


function writeCards (names, event) {
  let newArray = [];
  for (let i=0; i < 3; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  };
  return newArray;
};


function countDown () {
  let number = 10;
  while (number >= 0) {
    console.log(number--)
  };
};


*/




















/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts (gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  };
  return gifts;
};

wrapGifts(gifts);

let newArray = [];

function writeCards (names, eventName) {
  for (let i = 0; i < 3; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  };
  return newArray;
};

function countDown (){
  let i = 10;
  while (i>=0) {
    console.log(i--);
  };
};

*/