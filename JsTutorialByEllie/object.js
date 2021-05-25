// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in javaScript are instance of Object
// object ={ key : value };

// 비효율적
// const name = 'ellie';
// const age = 4;
// print(name, age);
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }

////////////////////////////////////
// 1. Literals and properties
////////////////////////////////////

// 1 - object바로 만들기 / object literal
const obj1 = {};

// 2 - class템플릿을 이용해 Object만들기 / object constructor
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

// Object로 관리
const ellie = {name: 'ellie', age: 4};
print(ellie);

// 미친짓 = 나중에 추가가능하다 // 유지보수 힘듬 
ellie.hasJob = true;
console.log(ellie.hasJob)
// 삭제또한 가능
delete ellie.hasJob
console.log(ellie.hasJob)

////////////////////////////////////
// 2. Computed properties
////////////////////////////////////

// Key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// 동적으로 Key에 관련된 value를 받아와야할때 유용하게 쓰임
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

////////////////////////////////////
// 3. Property value shorthand
////////////////////////////////////

const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('elile', 30);
console.log(person4);

////////////////////////////////////
// 4.Construcrot Function
////////////////////////////////////

function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

////////////////////////////////////
// 5. in operator: property existence check (key in obj)
////////////////////////////////////

console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);
 
////////////////////////////////////
// 6.for..in vs for..of
////////////////////////////////////
// for (key in obj)

// 이전 로그 지우기
console.clear();
for (key in ellie) {
     console.log(key);
 }

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}

////////////////////////////////////
// 7. Fun cloning
////////////////////////////////////
// Object.assign(dest, [obj1, obj2, obj3...])

const user = { name: 'ellie', age: '20'};
const user2 = user;
console.log(user);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2)





















