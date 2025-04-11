const a = 'aaa';
const b = 'bbb';

function myFunction(){
    console.log('this is my function');
}

function defaultFunction(){
    console.log(
        'this is my default function'
    )
}

export {a, myFunction};
export default defaultFunction;