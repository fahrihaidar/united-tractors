const floor = [5, 6, 7];

let input = 11;
let output = 0;

while (input > 0) {
    input -= floor [(output > 2) ? (output % 3) : output];
    output++;
}

console.log ('Lt' + ' ' + output);