function boooo(n) {      // takes input 
    for (let i = 0; i < n; i++) { //loop this loop  console.logs boo
        console.log('booooo');
    }
}
boooo([1, 2, 3, 4, 5]) //will print out booo 5 times

// ^ this function has a space complexity of 0(1)


// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi'; //as we are looping we fill it with hi
    }
    return hiArray;
}

arrayOfHiNTimes(6) // print 6 times
//space complexity is 0(n)