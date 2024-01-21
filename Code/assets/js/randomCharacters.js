// Author:Jesse Carpenter
// Program: Random Character Generator (OOP)
// Class: RandomCharacters
// Object: randomCharacters
// DATE: 20240114
// Update: 20240121
// References: ------ LEARNING Javascript OOP
// ------ • JS-Books
// ------ Source:
// ------ https://github.com/sugarac/JS-Books
// ------ • Mastering JavaScript Object-Oriented Programming.pdf
// ------ Source:
// ------ https://github.com/sugarac/JS-Books/blob/master/Mastering%20JavaScript%20Object-Oriented%20Programming.pdf
// Original source unknown...
// LICENSE: MIT

// TODO: What function calls can be incorporated into the class RandomCharacters?

// Object-Oriented-Programming (OOP)
// -------------------------------------------------------------- BEGIN of CLASS
// CLASS: RandomCharacters, INSTANIATED OBJECT: randomCharacters
// --------------------------------------------------------------
class RandomCharacters {
  // PRIVATE PROPERTIES
  #resultEl;
  #lengthEl;
  #uppercaseEl;
  #lowercaseEl;
  #numbersEl;
  #symbolsSet1El;
  #symbolsSet2El;
  #generateEl;
  #characters;
  #password;

  // Class Constructor
  constructor() {
    this.#resultEl = document.getElementById("result");
    this.#lengthEl = document.getElementById("length");
    this.#uppercaseEl = document.getElementById("uppercase");
    this.#lowercaseEl = document.getElementById("lowercase");
    this.#numbersEl = document.getElementById("numbers");
    this.#symbolsSet1El = document.getElementById("symbolsSet1");
    this.#symbolsSet2El = document.getElementById("symbolsSet2");
    this.#generateEl = document.getElementById("generate");
  }

  // GETTERS & SETTERS
  // Upon calling getters and setters,
  // they're not functions so do not use ().
  // For examples, see function calls below...
  get LengthElement() {
    return this.#lengthEl;
  }

  get Length() {
    return this.#lengthEl.value;
  }

  get GenerateElement() {
    return this.#generateEl;
  }

  // PUBLIC METHODS
  Password() {
    this.#generatePassword();
    this.#resultEl.value = this.#password;
  }

  Increment() {
    this.#lengthEl.value++;
  }

  Decrement() {
    this.#lengthEl.value--;
  }

  // PRIVATE METHODS
  #generatePassword() {
    const lengthPassword = this.#lengthEl.value;
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

    if (this.#uppercaseEl.checked) this.#characters += this.#upper();
    if (this.#lowercaseEl.checked) this.#characters += this.#lower();
    if (this.#numbersEl.checked) this.#characters += this.#number();
    if (this.#symbolsSet1El.checked) this.#characters += "#$%^&*";
    if (this.#symbolsSet2El.checked) this.#characters += "!@(){}[]=<>/,.";
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
// -------------------------------------------------------------- END of CLASS
// -----------------------------------------------------------------------------
// -------------------------------------------------------------- CLASS INSTANIATION
// Instaniate Object from Class definetion
const randomCharacters = new RandomCharacters();

// -------------------------------------------------------------- CLASS CALL
// Initial run after defer html page. NO LONGER USED
// Note: It may be better to place the script tag from the head tag
// and placed before the closing </body> tag in which case the defer
// would not apply...
// Therefore removed the word defer and moved the script tag... jc
randomCharacters.Password();

// -------------------------------------------------------------- FUNCTION CALLS
// Minus icon
lengthMinus.onclick = function () {
  randomCharacters.Decrement(); // lengthEl.value--;
  lengthCounter.innerHTML = randomCharacters.Length; // lengthEl.value;
};

// Plus icon
lengthPlus.onclick = function () {
  randomCharacters.Increment(); // lengthEl.value++;
  lengthCounter.innerHTML = randomCharacters.Length; // lengthEl.value;
};

// Enter Length change
// lengthEl.oninput = function () {
randomCharacters.LengthElement.oninput = function () {
  lengthCounter.innerHTML = randomCharacters.Length; // lengthEl.value;
};

// Generate Characters (password)
// generateEl.onclick = () => {
randomCharacters.GenerateElement.onclick = () => {
  randomCharacters.Password();
};

// Copy to clipboard
copy.onclick = () => {
  navigator.clipboard.writeText(randomCharacters.Length /* resultEl.value */);
};

// Generate Characters icon
change.onclick = () => {
  randomCharacters.Password();
  change.style.transform += "rotate(360deg)";
};
