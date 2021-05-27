///////////////////////////////////////////
// Shorthand property names
///////////////////////////////////////////
// key와 value가 같으면 생략할 수 있다

{
    const ellie1 ={
        name: 'Ellie',
        age: 18,
    }

    const name = 'Ellie';
    const age = '18';

    // Bad
    const ellie2 = {
        name: name,
        age: age
    }

    // Good
    const ellie3 = {
        name,
        age,
    }
}

///////////////////////////////////////////
// Destricturing Assignment
///////////////////////////////////////////

{
    // object
    const student = {
        name: 'Anna',
        level: 1,
    }

    // Bad
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    // Good
    {
        const { name, level } = student;
        console.log(name, level);

        // 다른이름으로 출력
        const { name: studentName, level: studentLevel} = student;
        console.log(studentName, studentLevel);
    }

    // array
    const animals = ['dog', 'cat'];

    // Bad
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // Good
    {
        const [first, second] = animals;
        console.log(first, second);
    }
    
}

///////////////////////////////////////////
// Spread Syntax
///////////////////////////////////////////
{
    cosnt obj1 = { key : 'key1'};
    cosnt obj2 = { key : 'key2'};
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    // Copy되면 기존객체에 데이터하나하나를 가져오는것이 아니라
    // 데이터가 들어있는 주소값(reference)를 가져온다
    // 기존 obj의 값을 바꾸면 copy된 모든 객체가 같이 변경된다
    const arrayCopy2 = [...array, { key: 'key3'}];
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    // array concatenation
    const fruits1 = ['apple', 'banana'];
    const fruits2 = ['orange', 'watermalon'];

    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    // 같은값인경우 가장 뒤에 있는값을 덮어 씌운다
    const dog1 = { dog: 'wal'};
    const dog2 = { dog: 'mong'};
    const dog = {...dog1, ...dog2};
    console.log(dog);

}

///////////////////////////////////////////
// Default parameters
///////////////////////////////////////////

{
    // Bad
    {
        function printMessage(message) {
            // 아무런 인자가 전달되지 않은 경우 이렇게 작성하지만
            if (message == null) {
                message = 'defualt message';
            }
        }
        printMessage('Hello');
        // 인자가 전달 안되면 undefined가 뜬다
        printMessage();
    }

    // Good
    {
        function printMessage(message = 'defualt message'){
            console.log(message); 
        }
        printMessage('hello');
        printMessage();
    }
}

///////////////////////////////////////////
// Ternary Operator
///////////////////////////////////////////

{
    const isCat = true;
    
    // Bad
    {
        let component;
        if (isCat) {
            component = 'Cat';
        } else {
            component = 'Dog';
        }
        console.log(component);
    }

    // Good
    {
        const component = isCat ? 'Cat' : 'Dog';
        console.log(component);
        //또는
        console.log(isCat ? 'Cat' : 'Dog');
    }

}

///////////////////////////////////////////
// Template Literals
///////////////////////////////////////////

{
    const weather = 'cold';
    const temparature = '16C';

    // Bad
    console.log(
        'Today weather is ' + weather +
        'and temparature is ' + temparature + '.');
    
    // Good
    console.log(`Today weather is ${weather} 
                and temparature is ${temparature}.`)
}