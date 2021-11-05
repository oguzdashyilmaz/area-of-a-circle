const arguments = process.argv.slice(2);

// function that finds area of a circle, that can function
// giving input in terminal.

function findArea(r){
    let PI = Math.PI;
    let area = PI * r * r;
    return area;
}

console.log(findArea(arguments[0]*1, arguments[1]*1));