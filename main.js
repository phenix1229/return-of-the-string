function capitalize(str) {
  let statement = str.toUpperCase();
  return statement;
}

function exclaim(str) {
  let statement = str + '!'
  return statement;
}

function firstCharacter(str) {
  let l1 = str[0];
  return l1
}

function lastCharacter(str) {
  let lLast = str[str.length - 1];
  return lLast;
}

function oneCharacter(str, num) {
  let randomL = str[num];
  return randomL;
}

function twoCharacters(str, num1, num2) {
  let randomL = str[num1];
  let randomL2 = str[num2];
  return randomL + randomL2;
}

function initials(str) {
  let firstInitial = str[0];
  
}

function yeller() {
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};