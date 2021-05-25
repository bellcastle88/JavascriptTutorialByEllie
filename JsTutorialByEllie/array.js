'use strict';

////////////////////////////////////
// 1. Array
////////////////////////////////////

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

////////////////////////////////////
// 1. Index position
////////////////////////////////////

const fruits  = ['apple', 'banana'];
console.log(fruits);

// 길이
console.log(fruits.length);

// apple만 출력하기
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined

// 마지막 데이터 접근
console.log(fruits[fruits.length - 1]);

//이전 로그 삭제
console.clear();

////////////////////////////////////
// 3. Looping  over an array
////////////////////////////////////

// print all fruits
// a.for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach 
// ctrl 클릭 -> 해당 api로 이동
fruits.forEach((fruit) => console.log(fruit));

////////////////////////////////////
// 4. Addtion, deletion, copy
////////////////////////////////////

// push: add and item to the end
fruits.push('strawberry', 'peach')
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('remon');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
 
// splice: remove an item by indexx position
fruits.push('honny','rice','curry');
console.log(fruits)

// fruits.splice(1); // 삭제할갯수를 적지 않으면 입력한 인덱스부터 모두 삭제
fruits.splice(1, 1) // 1번째 뒤로 1개 삭제
console.log(fruits);

fruits.splice(1, 1, 'water', 'coke')  //1번부터 하나만 지우고 'water', 'coke'넣어준다

// combine two arrays
const fruit2 = ['egg','soup']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

////////////////////////////////////
// 4. Searching
////////////////////////////////////

console.clear();
console.log(fruits);
console.log(fruits.indexOf('egg'));

// 배열에 있는지 없는지 확인
console.log(fruits.includes('coke'));

// 없는값을 출력하면 -1 , false

// lastIndexOf
// 가장 마지막에 있는 apple출력
console.log(fruits.lastIndexOf('apple'))