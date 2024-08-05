function* foo(index) {
    console.log("start foo");
    while (index < 2) {
        console.log("inside foo:", index);
        yield index;
        index++;
    }
}

console.log("---------");
const iterator = foo(0);
console.log("---------");

console.log("==", iterator.next().value);
// Expected output: 0

console.log("==", iterator.next().value);
// Expected output: 1
