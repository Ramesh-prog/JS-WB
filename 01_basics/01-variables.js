const accountId = 1443
let accountEmail = "ramesh@gmail.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"
let accountState;

// accountId = 2 // not allowed because it constant 
accountEmail = "webbocket@gmail.com"
accountPassword = "54321"
accountCity = "dhenkanal"

// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
-> Variables are container for storing data.
-> javascript variables can be declared in 4 ways 

1. Automatically
2. using var
3. using let
4. using const

-> the var keyword was used in all javascript code from 1995 to 2015
-> the let and const keyword were added to javascript in 2015.
-> the var keyword should only be used in code written for older browser.
-> let is blocked-scoped where as var is function scoped. 

function root(){
    if(true){
        var heroOne = "Iron man";
        const heroTwo = "superman";
        let heroThree = "batman";
    }
    console.log(heroOne);   // "Iron man"
    console.log(heroTwo);   // HeroTwo is not defined 
    console.log(heroThree); // heroThree is not defined
}

root();

*/