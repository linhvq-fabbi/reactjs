//The function checks prime numbers
function check_prime_numbers(n){
    
    //Flag
    var flag = true;

    //If n is less than 2, it isn't a prime number
    if(n < 2){
        flag = false;
    }
    else if(n == 2){
        flag = true;
    }
    else if(n % 2 == 0){
        flag = false;
    }
    else{
        //Loop from 3 to n-1 with step 2(i+=2)
        for(var i = 3; i < n-1; i+=2){
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }

    return flag;
}

var yargs = require('yargs');

//Get all agruments
var argv = yargs.argv;

//Print it out to preview

if (typeof argv.n == 'undefined'){
    console.log("You haven't entered n! ");
}
else{
    if(check_prime_numbers(argv.n)){
        console.log("It is prime number!");
    }
    else{
        console.log("It isn't prime number!");
    }
}

