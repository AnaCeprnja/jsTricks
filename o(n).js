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

// 0(n) --> Linear Time --> the big 0 depends on the number of inputs <-- most common 
// if you have the large array is would be 0(100000) if you have the everyone array it would be 0(5)\
//n stands for size of input aka scalability 

//graph would go up into the right like shown bellow
///////////////////
////////////////
////////////
//////////
////////
//////
////

//Another example 

function funChallenge(input) {
    let a = 10; //0(1) only running once
    a = 50 + 3; //0(1) only asigning 3 same each time

    for (let i = 0; i < input.length; i++) { //0(n) reflects how big the put will be and take loops are always linear time
        anotherFunction(); //0(n) because it depends on how many times this function is being run
        let stranger = true; //runs as many times as the input happens 0(n)
        a++; // just means a +1 so will increase as the one goes up making it 0(n) because it depends on input size
    }
    return a; //0(1) reutn statements only run once!
}

funChallenge()

//BIG O WILL BE ---> BIG O(3+4n) --> gets simplified to just O(n)

function anotherFunChallenge(input) {
    let a = 5; //O(1)
    let b = 10;//O(1)
    let c = 50;//O(1)
    for (let i = 0; i < input; i++) {
        let x = i + 1;//O(n)
        let y = i + 2;//O(n)
        let z = i + 3;//O(n)

    }
    for (let j = 0; j < input; j++) {
        let p = j * 2;//O(n)
        let q = j * 2;//O(n)
    }
    let whoAmI = "I don't know"; //O(1)
}

// BIG O(4+5n) or 7n if you include the loops --> turns into O(n)