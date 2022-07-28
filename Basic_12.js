function sayHello(name){
    let msg = 'Hello';
    if(name){
    msg += ',' + name;
    // msg에 name을 더해서 다시 msg로 넣어줌, Hello와 이름을 띄워주기 위해 ','를 더해줌
    // msg += `, ${name}`을 넣어도 같은 결과 출력
    }
    console.log(msg);
    }
    
    sayHello(); // "Hello"만 출력
    sayHello('Mike'); // "Hello, Mike" 출력