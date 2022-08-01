const Mike = {
    name: "Mike",
    age: 30
    };
    
    for(x in Mike){
    console.log(x) // "name"과 "age" 출력
    console.log(Mike[x]) // "Mike"와 30 출력(=Mike['name'], Mike['age'])
    }