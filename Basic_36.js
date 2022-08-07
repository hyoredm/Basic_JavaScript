let boy = {
    name: 'Mike',
    sayHello: () => {
    console.log(this); // this는 전역객체를 가리키게 됨
     }
    }
    
    boy.sayHello(); // this != boy