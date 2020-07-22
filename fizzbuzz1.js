/**
 *  counts from 1 to 100
 * 
 * numbers divisible by 3 are replaced by fizz
 * 
 * numbersS divisible by 5 are replaced by buzz
 * 
 * numbers divisible by both 3 and 5 are replaced with fizz buzz
 * 
 */

 for (i = 1; i <= 100; i++) {

    if (i % 5 == 0 && i % 3 == 0) {
        console.log("fizz buzz");
    }
    else if (i % 3 == 0) {
        console.log("fizz");
    }
    else if (i % 5 == 0) {
        console.log("buzz");
    }
    else {
    
        console.log(i);
    }
 }
