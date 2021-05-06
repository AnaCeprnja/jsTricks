function boooo(n) {      // takes input 
    for (let i = 0; i < n; i++) { //loop this loop  console.logs boo
        console.log('booooo');
    }
}
boooo([1, 2, 3, 4, 5]) //will print out booo 5 times


// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6)