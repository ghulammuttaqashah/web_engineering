// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
        next: function() {
            n += 10;
            if(n==100) return {done:true};
            return { value: n, done: false };
        }
    };
}

// Create Iterable
const n = myNumbers();
console.log(n.next()); // Returns 10
console.log(n.next()); // Returns 10
console.log(n.next()); // Returns 10
console.log(n.next()); // Returns 10
console.log(n.next()); // Returns 10
console.log(n.next()); // Returns 10
console.log(n.next()); // Returns 10
console.log(n.next()); // Returns 10console.log(n.next()); // Returns 10
console.log(n.next()); // Returns 10
console.log(n.next()); // Returns 10
console.log(n.next()); // Returns 10console.log(n.next()); // Returns 10
console.log(n.next()); // Returns 10
