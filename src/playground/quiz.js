console.log('quiz...');
function f(x) {
    x *= 2;
    return function(y) {
        y *= x;
        return function(z) {
            return z * y;
        };
    };
}

let g= f(3)(4)(5);
console.log(g);

function gen(start, range) {
    let x = start;
    let direction = 1;
    return function() {
        x += direction;
        if (Math.abs(x - start) >= range) direction *= 1;
        return x;
    };
}

let f = gen(4, 5);
f();
f();
f();
f();
f();
let g = f();
console.log(g);