function oneThroughTwenty(){

    let oneThroughTwenty = []
    for(let i = 1; i<= 20; i++) {
        oneThroughTwenty.push(i)
    }
    return oneThroughTwenty
}

console.log (oneThroughTwenty())




function evensToTwenty(){

     
    let evensToTwenty = []
    for (let i = 1; i<= 20; i++){
        if ((i % 2) == 0){
        evensToTwenty.push(i)
        }
    }
       return evensToTwenty
}

console.log (evensToTwenty())




function oddsToTwenty(){

    let oddsToTwenty = []
    for (let i = 1; i<= 20; i++){
        if ((i % 2) !== 0){
         oddsToTwenty.push(i)
        }
}
    return oddsToTwenty

}
console.log (oddsToTwenty ())

function multiplesOfFive(){

    let multiplesOfFive = []
    for (let i = 5; i<= 100 ; i++){
        if (i % 5 === 0 || i % 100 === 0){
            multiplesOfFive.push(i)
        }
}
    return multiplesOfFive

}
console.log (multiplesOfFive())


function squareNumbers(){
   
    let square =[]
    for (let i = 1; i<=10; i++) {
        let numbers = i * i;
        if(numbers <= 100){
            square.push(numbers)
        }  
         
}
return square
   
}
console.log (squareNumbers())


function countingBackwards (){
    
    let countingBackwards = []
    for (let i = 20; i>= 1; i--) {
        if (i % 2 == 0)
        countingBackwards.push(i)
    }
    return countingBackwards
}
console.log (countingBackwards())


function oddNumbersBackwards(){
    
    let oddNumbersBackwards = []
    for (let i = 20; i>= 1; i--) {
        if (i % 2 !== 0)
        oddNumbersBackwards.push(i)
    }
    return oddNumbersBackwards
}
console.log (oddNumbersBackwards())



function multiplesOfFiveBackwards(){
    
    let multiplesOfFiveBackwards = []
    for (let i = 100; i>= 5 ; i--){
     if (i % 5 === 0 || i % 100 === 0){
        multiplesOfFiveBackwards.push(i)
     }
        
}
return  multiplesOfFiveBackwards
}
console.log (multiplesOfFiveBackwards())

function squareNumbersBackwards (){
   
    let square =[]
    for (let i = 10; i>=1; i--) {
        let numbers = i * i;
        if(numbers <= 100){
            square.push(numbers)
}
}   
    return square
}
console.log(squareNumbersBackwards())