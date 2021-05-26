'use stric';

////////////////////////////////////
// 1. JavaScript is aychronous
////////////////////////////////////

// Execute the code block in order after hoisting
// code가 나타나는 순서대로 실행이 된다
// hoisting: var, function declaration
// callback : 전달해준 함수를 다시 불러줘

// 1, 3, 2 비동기적 실행방법
console.log('1'); 

// setTimeout(function () {
//     console.log('2');
// }, 1000)

// arrow function
setTimeout(() => console.log('2'), 1000);

console.log('3');

// 함수가 실행순서 가장위로 올라간다 

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000)


////////////////////////////////////
// 3. callback Hell example
////////////////////////////////////

class UserStorager {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy') 
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)

////////////////////////////////////
// 4. callback체인의 문제점
////////////////////////////////////

//  다음 강의에 계속!!!








