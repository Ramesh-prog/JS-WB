// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

function addTwoNumbers(number1, number2){ // parameters

    console.log(number1 + number2);
}
// addTwoNumbers(3,"a"); //arguments

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    // console.log("ramesh")
    
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("ramesh"))

function loginUserMessage(username){
    if(username === undefined){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function loginUserMessage(username = "sam"){
    if(!username){ // !(convert true to false / false to true)
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("ramesh"));


function calculateCartPrice(val1, val2, ...num1){ //...num1 - rest operator 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
