let boy = {
    name: 'Mike',
    showName: function () {
    console.log(this.name)
     } // method의 this는 해당 객체를 가리킴
    };
    
    let man = boy;
    boy = null;
    
    man.showName(); // "Mike" 출력