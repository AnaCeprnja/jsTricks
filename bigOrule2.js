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
