let fruit = prompt('무슨 과일을 사고 싶나요?');

switch(fruit){
case '사과':
console.log('100원 입니다.');
break;
case '바나나':
console.log('200원 입니다.');
break;
case '키위':
console.log('300원 입니다.');
break;
case '멜론':
case '수박':
// 출력 값이 같아 묶어서 작성 가능
console.log('500원 입니다.');
break;
//출력하고자하는 특정 케이스 값 하나만 출력
default:
console.log('그런 과일은 없습니다.');
//else와 같은 역할, switch 구문 내의 케이스 이외의 입력값에 대한 출력
}