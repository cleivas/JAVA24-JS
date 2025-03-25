function logSomething(){
    console.log('something')
}

logSomething();
logSomething(1, 2, 3, 4);


function say(word){
    if(typeof word === 'string') console.log(word);
    else console.log('Not a string.');
}

say('Hej!')
say(44);


function getSum(){
    let sum = 0;
    for(const num of arguments){
        sum += num;
    }
    // console.log(arguments)
    return sum;
}

console.log( getSum(32, 54, 2, 6, 7) )
console.log( getSum(1, 3) )

outerFunc();

function outerFunc(){
    console.log('outer')

    innerFunc();

    function innerFunc(){
        console.log('inner')
    }
}

