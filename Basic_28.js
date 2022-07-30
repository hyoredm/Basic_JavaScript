fuction isAdult(user){
    if(user.age < 20){
    return false;
     }
    return true;
    }
    
    const Mike = {
    name: 'Mike',
    age: 30
    }
    
    const Jane = {
    name: "Jane"
    };
    
    console.log(isAdult(Mike)) // true 출력
    console.log(isAdult(Jane)) // true 출력(나이가 없어서 undefined, 따라서 if 구문이 false가 되면서 true 출력)