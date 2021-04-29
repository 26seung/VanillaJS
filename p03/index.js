function sayHello(arg1,arg2){
    console.log('Hello',arg1,'age:',arg2);
}

sayHello('Euseung',30);
console.log('Hi');

// argument 를 사용하여 함수 내 값을 적용하여 사용 할 수 있음.

console.log('////////////');

function sayHello(name,age){
    console.log(`Hello ${name} you are ${age}`);
}
sayHello('Euseung',30);


function sayHelloReturn(name,age){
    return `Hello ${name} you are ${age}`;
}
const test = sayHelloReturn('test',60)
console.log(test);

//////////////////////////////////

const calculator = {
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }
}
const plus = calculator.plus(2,8);
const minus = calculator.minus(2,8);
const multiply = calculator.multiply(2,8);
const divide = calculator.divide(2,8);
console.log(plus);
console.log(minus);
console.log(multiply);
console.log(divide);