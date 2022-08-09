let boy = {
    name: 'Mike',
    showName: function () {
    console.log(boy.name)
     }
    };
    
    let man = boy; // 사람은 Mike 한명인데, man과 boy 별명이 2개
    boy = null; // man으로만 접근 가능
    
    man.showName(); // boy가 null이 되면서 boy의 name과 showName 모두 없어짐