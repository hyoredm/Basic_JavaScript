let days = ["mon", "tue", "wed"];

days.push("thu")
days.unshift("sun")

for(let index = 0; index < days.length; index++){
console.log(days[index]);
} // "sun", "mon", "tue", "wed", "thu"를 순차적으로 출력