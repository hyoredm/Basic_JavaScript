let days = ["mon", "tue", "wed"];

days.push("thu")
days.unshift("sun")

for(let day of days){
console.log(day);
} // "sun", "mon", "tue", "wed", "thu"를 순차적으로 출력