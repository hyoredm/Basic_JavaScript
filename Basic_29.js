fuction isAdult(user){
    if(!('age' in user) || // user에 age가 없거나
    user.age < 20){ // 20살 미만이거나
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
    
    console.log(isAdult(Jane)) // false 출력