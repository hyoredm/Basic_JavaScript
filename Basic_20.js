function sayHello(name = 'friend'){
    let msg = `Hello, ${name}`
    console.log(msg);
    }
    sayHello(); // "Hello, friend" 출력, name이 없을 경우 디폴트 값인 'friend' 할당
    sayHello('Jane'); // "Hello, Jane" 출력