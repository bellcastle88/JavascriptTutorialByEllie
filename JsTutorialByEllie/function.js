// Function
// - fundemental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body ... return; }
// one function === one thing
// namin: doSomethingg, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

//함수를 호출해서 원하는 메시지 입력
function log(message) {
    console.log(message);
}
log('Hello@');

//////////////////////////////////////////////////////////////////////////////////

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

//////////////////////////////////////////////////////////////////////////////////

// 3.Default parameters (added in ES6)

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//////////////////////////////////////////////////////////////////////////////////

// 4.Rest parameters (added in ES6)
// ...args = array를 나타내준다
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(ars[i]);
    }

    //더 간단히
    for (const arg of args) {
        console.log(arg);
    }

    //더 간단히
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

//////////////////////////////////////////////////////////////////////////////////

// 5. Local scope
// ex) 창문 안에서는 밖을 볼 수 있지만, 밖에서는 창문안을 볼 수 없다
let globalMessage = 'global'; // global value
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childmessage = 'hello';
    }
    //console.log(childMessage); // 함수 밖에서는 호출 불가 
    
    // return undefined; // 모든 함수 안에는  return undefined들어가 있는거랑 똑같다
}
printMessage();

//////////////////////////////////////////////////////////////////////////////////

// 6. Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1,2)}`);

//////////////////////////////////////////////////////////////////////////////////

// 6. Early return, early exit

// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


// First-class funtion
// functions are treaded like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1.Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the excution reaches it.

const print = function () { // 함수의 이름이 없는 경우 annonymous function
    console.log('print');   // 이름이 있으면 named function
};
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1,3));

//////////////////////////////////////////////////////////////////////////////////

// 2. Callback function using functiong expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack taces
// recursions
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function 
// always anonymous

// Arrow function 사용하기 전  
const simplePrint = function () {
    console.log('simplePrint!');
};
// Arrow function 사용 후
const simplePrint = () => console.log('simplePrint!');


// Arrow function 사용하기 전  
const add = function (a, b) {
    return a + b;
};
// Arrow function 사용 후
const add = (a, b) => a + b;
// block 필요시 
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

//IIFE: Immediately Invoked Function Expression
// hello();라고 따로 호출하지 않아도 쓸 수 있다.
(function hello() {
    console.log('IIFE');
})();










































