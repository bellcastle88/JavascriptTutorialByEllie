
// 1. Use stric
'use stric';

//////////////////////////////////////////////////////////////////////////////////

// 2. Variable 변수
// let (added in ES6)

let golbalName  = 'global name';
{
    let name = 'jace';
    console.log(name);
    name = 'hello';
    console.log(name);
}

//Block밖에선 실행할 수 없다 
console.log(name);
// Golbal이라 실행가능
console.log(golbalName);

//var (don't ever use this!)
//값을 선언하기 전에 쓸 수 있다 = 말이 안되는 것
//has no bloc scope 
//var hoisting (move declaration from bottom to top)

//////////////////////////////////////////////////////////////////////////////////

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakeㄴs
const daysInWeek = 7;
const maxNumber = 5;

//////////////////////////////////////////////////////////////////////////////////

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefind, symbol
// object, box container
// funtion, first-class function

const count = 17; // integer
const size = 17.1; // decimal number

console.log(`value: ${count}', type: ${typeof count}`);
console.log(`value: ${size}', type: ${typeof size}`);

// number - speical numeric values: infinity, - infinity,  NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number'  / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 최근 bigInt type추가 됌 

//////////////////////////////////////////////////////////////////////////////////

// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;

console.log(`value: ${greeting}, type: ${typeof greeting}`);
console helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// back tic `` 을 이용하면 아래처럼 + 로 나누지 않아도 된다. 
console.log('value: ' + helloBob + 'type:' + typeof helloBob);

//////////////////////////////////////////////////////////////////////////////////

// boolean
// false: 0, null, undfined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//////////////////////////////////////////////////////////////////////////////////

// null
// null이라고 값이 지정된 경우
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//////////////////////////////////////////////////////////////////////////////////

// undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

//////////////////////////////////////////////////////////////////////////////////

// symbol, create unique identifiers for objects
// 고유한 식별자를 만들때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

// String을 Symbol로 만들때 for을 입력해준다
const gSymbol1 = Symbol.for('id');
const gSymbol1 = Symbol.for('id');
console.log(symbol1 === symbol2);

//symbol을 출력할땐 description을 입력해야한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

//////////////////////////////////////////////////////////////////////////////////

// object, real-life object, data structure
const ellie = { name: 'ellie', age:20 };
// ellie라는 객체는 변경이 불가능 하지만 안에 변수는 변경가능
ellie.age = 21;

//////////////////////////////////////////////////////////////////////////////////

// 5. Dynamic typeing: dynamically typed language
// 아래처럼 오류가 생긴다 
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text =1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));




























































