//=================================Variable declaration using const=================================
// const indx; // const variables must be assigned

// This will throw an error at indx = 1; Both indx = 1 and indx++ are incorrect because reassignment is not possible.
const indx = 0;
for(indx = 1; indx < 10; indx++) {}