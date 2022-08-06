let boy = {
    name: 'Mike',
    sayHello,
    }
    let girl = {
        name: 'Jane',
        sayHello,
        }
        sayHello: function(){
            console.log(`Hello, I'm ${this.name}`);
            }
            
            boy.sayHello(); // I'm Mike
            girl.sayHello(); // I'm Jane