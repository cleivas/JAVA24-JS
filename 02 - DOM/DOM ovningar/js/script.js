// functions 1

function createSquare(size, color = 'hotpink'){

    const square = document.createElement('div');
    square.style.width = size +'px';
    // square.style.height = size + 'px'; //Behövs ej pga stilregeln med aspect ratio
    square.style.backgroundColor = color;

    document.body.append(square)

    console.log(size, color)
}

createSquare(20, 'limegreen');
createSquare(50);
createSquare(200, 'violet');

console.log(createSquare)
console.log(typeof createSquare)