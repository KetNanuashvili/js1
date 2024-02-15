//1
function FizzNumbers(){
    for (let i=1; i<=100; i++){
        if(i%3===0 && i%5===0){
            console.log( `${i} FizzBuzz`)
        }else if(i%5===0){
            console.log(`${i} Buzz`);
        }else if(i%3===0){
            console.log(`${i} Fizz`);
        }
        else{
            console.log(i);
        }
    }
}
FizzNumbers();

//2
function factorialCalculator(number){
    if (number===0 || number === 1){
        return 1;
    }else{
        return number * factorialCalculator(number-1);
    }
}
console.log(factorialCalculator(5));

//3

//4


blackStringChecker(testrString)
//5
let names = ['John','Nick', 'Bob', 'Marry', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

// let filterNames = [];
// for (let i=0; i< names.length; i++){
//     if(names[i] !=='Bob'){
//         filterNames.push(names[i]);
//     }
// }
let filterNames= names.filter(function(names2){
    return names2 !=='Bob';
});

console.log(filterNames);

