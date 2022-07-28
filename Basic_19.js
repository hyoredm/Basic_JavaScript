function sayHello(name){
    let newName = name || 'friend';
    let msg = `Hello, ${newName}`
    console.log(msg);
    }
    sayHello(); // "Hello, friend" 출력, name값이 false
    sayHello('Jane'); // "Hello, Jane" 출력