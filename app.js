const ana = ['ana']
const everyone = ['al', 'alex', 'ali', 'ami', 'amy']
//js trick to fill an array however many times with the number bellow and the name bellow
const large = new Array(10000).fill('ana')
const performance = 0
//funtion to find a name 
findAna = (array) => {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log("Found Ana!");
        }
    }
    let t1 = performance.now();
    console.log('finding Ana took' + (t1 - t0) + 'milliseconds');
}
findAna(large);