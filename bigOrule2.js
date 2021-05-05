function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) { //as long as middle index is greater then 0 console.log first half of the items
        console.log(items[index]); // because index will increase by / every loop untill index is 5
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}
//this function will print hello 100 times
// the big O of this 

// big O will be  O(1 +n/2 +100)  we only care about things on the chart so this turns into ----> O(n+1) ----> O(n)

// BIG O RULE NUMBER TWO IS REMOVE CONSTANTS!

function compressBoxesTwice(boxes) {
    boxes.forEach(function (boxes) {
        console.log(boxes);
    });


    boxes.forEach(function (boxes) {
        console.log(boxes);
    });
}

//this function will compress boxes twice
//O(n) + O(n) ----> O(2n) and when we drop the constants we return to O(n)