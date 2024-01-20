// Author:Jesse Carpenter
// Program: Random Character Generator (OOP)
// Class: RandomCharacters
// Object: randomCharacters
// DATE: 20240114
// LICENSE: MIT

// KEEP DOCUMENT ELEMENTS GLOBAL
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsSet1El = document.getElementById("symbolsSet1");
const symbolsSet2El = document.getElementById("symbolsSet2");
const generateEl = document.getElementById("generate");

// Object-Oriented-Programming (OOP)
// --------------------------------------------------------------
// CLASS: RandomCharacters, INSTANIATED OBJECT: randomCharacters
// --------------------------------------------------------------
class RandomCharacters {
  // PRIVATE PROPERTIES
  #characters;
  #password;

  constructor() {}

  // PUBLIC METHODS
  password() {
    this.#generatePassword();
    resultEl.value = this.#password;
  }

  // PRIVATE METHODS
  #generatePassword() {
    const lengthPassword = lengthEl.value;
    let randomNum;

    this.#init();
    for (let i = 0; i < lengthPassword; i++) {
      randomNum = Math.floor(Math.random() * this.#characters.length);
      this.#password += this.#characters[randomNum];
    }
  }

  #init() {
    this.#password = "";
    this.#characters = "";

    if (uppercaseEl.checked) this.#characters += this.#upper();
    if (lowercaseEl.checked) this.#characters += this.#lower();
    if (numbersEl.checked) this.#characters += this.#number();
    if (symbolsSet1El.checked) this.#characters += "#$%^&*";
    if (symbolsSet2El.checked) this.#characters += "!@(){}[]=<>/,.";
  }

  #upper() {
    let upper = "";
    for (let i = 0; i < 26; i++) {
      upper += String.fromCharCode(65 + i);
    }
    return upper;
  }

  #lower() {
    let lower = "";
    for (let i = 0; i < 26; i++) {
      lower += String.fromCharCode(97 + i);
    }
    return lower;
  }

  #number() {
    let number = "";
    // Do not select 0 and 1 that would confuse the
    // uppercase O and lowercase l...
    // DIGITS
    // 48:0, 49:1, 50:2, 51:3, 52:4, 53:5, 55:6, 56:7, 57:8, 58: 9
    const beginWithTwo = 2;
    for (let i = beginWithTwo; i < 10; i++) {
      number += String.fromCharCode(48 + i);
    }
    return number;
  }
}
// Instaniate Object
const randomCharacters = new RandomCharacters();
// Initial run after defer html page.
randomCharacters.password();

// Minus icon
lengthMinus.onclick = function () {
  lengthEl.value--;
  lengthCounter.innerHTML = lengthEl.value;
};

// Plus icon
lengthPlus.onclick = function () {
  lengthEl.value++;
  lengthCounter.innerHTML = lengthEl.value;
};

// Enter Length change
lengthEl.oninput = function () {
  lengthCounter.innerHTML = lengthEl.value;
};

// Generate Characters (password)
generateEl.onclick = () => {
  randomCharacters.password();
};

// Copy to clipboard
copy.onclick = () => {
  navigator.clipboard.writeText(resultEl.value);
};

// Generate Characters icon
change.onclick = () => {
  randomCharacters.password();
  change.style.transform += "rotate(360deg)";
};
