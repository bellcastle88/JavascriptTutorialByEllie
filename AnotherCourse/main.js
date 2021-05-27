///////////////////////////////////////////
// 변수 | primitive 타입과 object의 차이점
///////////////////////////////////////////

// 변수 (variable) = 데이터를 담고 있는것  
// number, string, boolean, null, undefined

let number = 2;
let number2 = 'Hello';
console.log(number)
console.log(number2)

let numberNew = number;
console.log(numberNew)

// 객체 (Object)
let obj = {
    name: 'Jace',
    age: 20,
};
console.log(obj.name);

let obj2  = obj;

console.log(obj2.name);
console.log(obj2.age);

obj.name = 'suki';

console.log(obj2);
console.log(obj);

// 변수 (variable)은 작은 단위기때문에 메모리에 그대로 들어간다. 값을 복사하면 값 자체가 복사된다
// 객체 (Object)는 메모리가 할당된 주소 (reference)가 들어있다. 값을 복사하면 주소 (reference)가 복사된다

// let은 값을 변경 가능
let a = 2;
a = 5;
a = 10;

// const는 값 변경 불가능
const b = 2;
// b = 5; 변경안됌

// const 객체 (Object)는 변경 가능

const obj3 = {
    name : 'jun',
    age: 22,
};

obj3.name = 'kuno';

console.log(obj3.name);


///////////////////////////////////////////
// 함수 (function) | 함수 정의, 호출, 그리고 콜백함수
///////////////////////////////////////////

// 반복수행되는걸 함수로 만든다 재사용도 가능

function add(x, y) {
    return x + y;
}
const sum = add(3, 5);

console.log(sum);

function greet() {
    console.log('Hello World');
}
greet();

function print(a, b) {
    console.log(`${a} ${b}`);
}
print(4, 'hi');

//////////////////////////////

function num(num1, num2) {
    return num1 + num2;
}

function surprise(operator) {
    const result = operator(2,3);
    console.log(result);
}
surprise(num);

function more(name, age) {
    console.log('Hello '+ name + '. You are ' + age + ' years old' )
}

more('jace','34');


///////////////////////////////////////////
// 연산자 | boolean의 모든것 && 연산자
///////////////////////////////////////////

// false: 0, -0, '', null, undefined
// true: -1, 'hello', 'false'
let obj = {
    name: 'ellie',
}; 
if (obj) {
    console.log(obj.name);
}

obj && console.log(obj.name);


