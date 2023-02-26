const IncrementCounter = (sharedObject) => {
    let indx = 0;
    setInterval(() => {
        sharedObject.counter++;
        console.log("IncrementCounter: ", sharedObject.counter);
    }, 1000);
}

const DecrementCounter = (sharedObject) => {
    setInterval(() => {
        sharedObject.counter--;
        console.log("DecrementCounter: ", sharedObject.counter);
    }, 1000);
}

(function () {
    let sharedObject = {
        counter: 0
    };

    setTimeout(() => {
        IncrementCounter(sharedObject);
    }, 1000);
    setTimeout(() => {
        DecrementCounter(sharedObject);
    }, 600);

    console.log("Main-thread is here!");
})();