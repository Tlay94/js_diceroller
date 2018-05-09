var roll = Math.floor(Math.random() * 20 + 1);
var win = 'Winner Chicken Dinner!';
var winSpeech = ['"Heroes are made by the paths they choose, not the powers they are graced with." ― Brodi Ashton, Everneath', '"To be heroic is to be courageous enough to die for something; to be inspirational is to be crazy enough to live a little." ― Criss Jami, Venus in Arms', '"Being a hero means ignoring how silly you feel." ― Diana Wynne Jones, Fire and Hemlock'];
var lose = 'YOU LOSE HAHA';
var loseSpeech = ["\"I have not failed. I\'ve just found 10,000 ways that won\'t work.\" ― Thomas A. Edison", '"There is only one thing that makes a dream impossible to achieve: the fear of failure." ― Paulo Coelho, The Alchemist', '"It is hard to fail, but it is worse never to have tried to succeed." ― Theodore Roosevelt', '"Only those who dare to fail greatly can ever achieve greatly." ― Robert F. Kennedy', '"If you fell down yesterday, stand up today." ― H.G. Wells', '"The only real mistake is the one from which we learn nothing." ― Henry Ford'];
var butts = 'SO CLOSE!';
var buttSpeech = '¯\_(ツ)_/¯'


function diceRoll() {
  if (roll <= 18) {
    console.log(lose);
  }
  else if (roll <= 19) {
    console.log(butts);
  }
  else {
    console.log(win);
  }
}


function quote() {
  if (roll <= 18) {
    return loseSpeech[Math.floor(Math.random() * 6)];
  }
  else if (roll <= 19) {
    return buttSpeech;
  }
  else {
    return winSpeech[Math.floor(Math.random() * 3)];
  }
}

diceRoll(roll);
console.log(roll);
console.log(quote());