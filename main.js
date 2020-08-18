
let firstName = 'Zmz';
const lastName = 'Bib';

const num = 5;
const float = 5.5

const infinity = 4/0;
const notaANumber = 'asd' * 8;

const isMarried = true;

const symb = Symbol();

const bigint = BigInt(2);

let notValue;

const nothing = null;
console.log(nothing);
console.log(typeof nothing);

const obj = {};
const arr = [];
const fn = function () {};
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof fn);

/** 
 * 
 * 
 * Dynamic 
 * 
 */
// string
console.log(typeof String(5));

const hello = 'Hello';
const world = 'World';
const concat= hello + world;
console.log(concat + 5);

// Number

console.log(Number('10'));
console.log(Number('asd'));

console.log(typeof +'6'); // convert to string

// Boolean
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false

console.log(!!'asd'); // true

// Operators

let a = 10;
let b = 7;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); //целое число от деления

console.log(10++);
console.log(++10);
console.log(--10);
console.log(10--);