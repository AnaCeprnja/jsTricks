const ana = ['ana']
const everyone = ['al', 'alex', 'ali', 'ami', 'amy']
//js trick to fill an array however many times with the number bellow and the name bellow
const large = new Array(10000).fill('ana')

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

// 0(n) --> Linea Time --> the big 0 depends on the number of inputs <-- most common 
// if you have the large array is would be 0(100000) if you have the everyone array it would be 0(5)\
//n stands for size of input aka scalability 