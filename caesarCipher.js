function caesarCipher(word, value) {
  let plainText = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let cipheredText = transformToCiphered(plainText, value);
  let newWord = word.split("");
  let cipheredWord = "";

  for (let i = 0; i < newWord.length; i++) {
    // this variable makes sure that if there are UpperCase in letters, transform it into lowerCase for checking
    let index = plainText.indexOf(newWord[i].toLowerCase());

    // if it doesnt exist in the array, skip the current iteration
    if (index === -1) {
      cipheredWord += newWord[i];
      continue;
    }

    // if it is UpperCase, push it as UpperCase
    if (newWord[i] === newWord[i].toUpperCase()) {
      cipheredWord += cipheredText[index].toUpperCase();
    } else {
      cipheredWord += cipheredText[index];
    }
  }

  return cipheredWord;
}
// transform the plaintext to ciphertext
function transformToCiphered(array, value) {
  let cipheredText = [];
  for (let i = 0; i <= array.length; i++) {
    cipheredText.push(array[i + value]);
    if (i + value === array.length - 1) {
      for (let j = 0; j < value; j++) {
        cipheredText.push(array[j]);
      }
      return cipheredText;
    }
  }

  return cipheredText;
}

module.exports = caesarCipher;
