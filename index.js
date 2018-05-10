var kittens = [];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return  kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}
function appendKitten(name){
  var newArray = [];
  newArray.push(...kittens, name);
  return newArray
}
function prependKitten(name){
  var newArray = [];
  newArray.unshift(name, ...kittens);
  return newArray
}
