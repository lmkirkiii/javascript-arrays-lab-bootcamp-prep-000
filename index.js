const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}
function removeFirstKitten(){
  return kittens.slice(1);
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}
function appendKitten(name){
  var kitten2 = [];
  kitten2.push(...kittens, name);
  return kitten2
}
function prependKitten(name){
  var kitten3 = [];
  kitten3.unshift(name,...kittens);
  return kitten3;
}

