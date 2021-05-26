'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fullfulled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// Promise Object 만들기
// 무거운 작업은 Promise로 비동기적으로 하는게 좋다
const promise = new Promise((resolve, reject) => {
    // doign some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('Jace');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
// 위에 Jace를 value로 받아온다.
promise.then((value) => {
    console.log(value);
})
//reject(error)을 어떻게 처리할건지
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
})

// 3. Promise chaining
// 여러가지를 동시에 묶어서 다른 비동기적인 값을 처리할수도 있다. 
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));


// 4.Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fryingpan`), 1000);
    });

getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(consle.log);