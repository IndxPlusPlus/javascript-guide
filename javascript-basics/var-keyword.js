//=================================Variable declaration using var=================================
function TestVar(init) {
    if (init) {
        var test = true; // use "var" instead of "let"
    }
    console.log("INSIDE FUNCTION BLOCK", test);
}

TestVar(false);

console.log("OUTSIDE FUNCTION BLOCK", test); // throw an error