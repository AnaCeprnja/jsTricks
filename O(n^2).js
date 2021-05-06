// Log all pairs of array

const boxes = ['a', 'b', 'c', 'd', 'e', 'f'];

function logAllPairs(array) {
    for (let i = 0; i < array, length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

logAllPairs(boxes)

//this is a nested loop

//what is the big o of this? When you see loops that are nested we multiply instead of add
// O(n^2) --> is the  big O 
// quadratic time