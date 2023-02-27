//=================================Variable declaration using let=================================
// We use `let` keyword to declare or declare and define a variable.
let user = 'John',
    age = 25;

// `let` creates block-level variables.
function TestLetKeyWord() {
    if (true) {
        let indx = 0;
        console.log("INSIDE IF BLOCK", indx);
    }
    console.log("OUTSIDE IF BLOCK", indx); // will throw an error
}