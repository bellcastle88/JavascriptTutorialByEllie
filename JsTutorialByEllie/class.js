'use strict';

// Object-riendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// JavaScript에 class는 ES6에 추가되었다.

////////////////////////////////////
// 1. Class declarations
////////////////////////////////////

class Person { // 사람이라는 클래스
    // constructor
    constructor(name, age) { // 생성자 : object를 만들때 필요한 데이터를 전달 한다.
        // fields 
        // 전달받은 데이터를 클래스에 존재하는 2가지 필드로 할당
        this.name = name;
        this.age = age;

        // methods
        // speak이라는 메소드(함수)도 존재한다
        speak() {
            console.log(`${this.name}: hello!`);
        }
    }
}

// object생성 (Class를 이용해 새로운 인스턴스를 생성하면 object가 된다 )
//새로운 object를 만들때 new

// 위에 constructor안에 name, age가 전달된다 
const ellie = new Person('ellie', 20);

// name, age 출력
console.log(ellie.name);
console.log(ellie.age);

// 메소드 호출
ellie.speak();


////////////////////////////////////
// 2.Getter and setters
////////////////////////////////////

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // this.age를 호출시 바로 메모리에 값을 할당하는것이 아니라
        // getter, setter를 호출하게 된다 
    }

    // 값을 리턴
    // 사용자가 요청하면 get.age를 리턴해야한다.
    get age() {
        return this._age;
    }

    // 값을 설정
    // value를 받아와야 한다.
    set age(value) {
        // 새로운 데이터를 받으면 this.age설정
        this._age = value < 0 ? 0 :value;
    }

    //call stack을 방지하기 위해서는 _age 사용
}

//외부에서 수정하지 못하도록 private으로 만든다 이게 캡슐화

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age)


////////////////////////////////////
// 3.Fields (public, private)
////////////////////////////////////

// Too soon!
// 최근에 생겨서 브라우저에서 지원하지 않는다.
class Experiment {
    publicField = 2;
    #privateFIeld = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

////////////////////////////////////
// 3.Fields (public, private)
////////////////////////////////////

// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

////////////////////////////////////
// 5. Inheritance
////////////////////////////////////
// a way for one class to extend another class.
// 상속, 다형성
// 공통된 부분을 재사용하기 위해 사용 / 유지보수 쉬움

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        // 여기 한곳에서만 수정하면 된다 
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// extends를 이용해 확장한다.
class Rectangle extends Shape {}

// Shape을 override해서 재정의해 사용
class Triangle extends Shape {
    // 다형성
    // 필요한 함수만 재정의해서 사용가능
    // overriding ( 필요한 함수들만 overriding해서 쓸 수 있다.)
    getArea() {
        return (this.width * this.height) / 2;
    }

    draw() {
        super.draw(); // 부모에 draw를 호출하면 부모의 메소드도 호출 된다 
        console.log('-_-!');
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

//상속을 이용하면 공통되는 부분을 재사용 할 수 있다.
const rectangle = new Rectangle(20, 20, 'blue');
//호출
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
//호출
triangle.draw();
console.log(triangle.getArea());

////////////////////////////////////
// 6. Class checking: instanceOf
////////////////////////////////////

// 왼쪽에 있는 Object가 오른쪽에 있는 Class의 인스턴스인지 아닌지 확인하는것
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());