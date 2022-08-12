let boy = {
    name: 'Mike',
    sayThis: () => {
    console.log(this); // this는 boy가 아닌 window 전역객체를 가리킴
     }
    };
    
    boy.sayThis(); // 에러, 윈도우가 나타남