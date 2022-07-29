function makeObject(name,age){
    return {
    name: name, // name, 로 축약 가능
    age: age, // age, 로 축약 가능
    hobby: 'football'
     }
    }
    
    const Mike = makeObject('Mike', 30);
    console.log(Mike);
    
    console.log("age" in Mike); // true 출력 - 프로퍼티 존재
    console.log("birthday" in Mike); // false 출력 - 프로퍼티 존재 X