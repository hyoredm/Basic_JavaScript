let msg = 'Hello'; // 전역 변수(global varable)
console.log('함수 호출 전') // "함수 호출 전" 출력
console.log(msg) // "Hello" 출력

function sayHello(name){
if(name){
msg += `, ${name}`
}
console.log('함수 내부'); // "함수 내부" 출력, 지역 변수(local varable)
console.log(msg);
}
sayHello('Mike'); // "Hello, Mike" 출력
console.log('함수 호출 후') // "함수 호출 후" 출력
console.log(msg) // "Hello, Mike" 출력