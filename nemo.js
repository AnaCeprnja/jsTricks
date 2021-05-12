const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'gill', 'hank']
const large = new Array(100000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('found nemo');
        }
    }
}
findNemo(everyone);

//another way of writing the same thing

const findNemo2 = array => {
    array.forEach(i => {
        if (fish === 'nemo')
            console.log('found nemo!');
    })

}
findNemo(everyone);;
//another way 

const findNemo3 = array => {
    for (let fish of array) {
        if (fish === 'nemo') {
            console.log('found nemo!');
        }
    }
}
findNemo(everyone);