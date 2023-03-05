// let book = {
//     title: "Dummy Book Title",
//     printTitle() {
//         console.log(`Book Title: ${this.title}`);
//     }
// }

// setTimeout(() => {
//     book.printTitle();
// }, 1000);

// book.printTitle = book.printTitle.bind(book);

// setTimeout(book.printTitle, 1000);


// let book2 = {
//     title: "Dummy2 Book Title"
// }
// book.printTitle = book.printTitle.bind(book2);

// book.printTitle();

// const divide = (b, a) => {
//     console.log("divide", a, b);
//     if (b == 0) return 0;
//     return a / b;
// }

// const divideByTwo = divide.bind(null, 2);

// console.log(divideByTwo(10));


// saves logs to local server
const LocalLogger = () => {
    const logs = [];
    let timeCounter = 0;
    return {
        start(callerId) {
            if (!logs.hasOwnProperty(callerId)) {
                logs[callerId] = [];
            }
            logs[callerId].push({ start: timeCounter++ });
        },
        end(callerId) {
            if (logs.hasOwnProperty(callerId)) {
                logs[callerId][logs[callerId].length - 1].end = timeCounter++;
            }
        },
        get(calledId){
            return logs[calledId];
        }
    }
}

// sends logs to another server
const ABCAPILogger = () => {
    return {
        start(callerId) {
            // Some API Call
        },
        end(callerId) {
            // Some API Call
        }
    }
}

// sends logs to another server and also saves them on local.
const LocalAndABCAPILogger = () => {
    let localLogger = LocalLogger();
    let abcAPILogger = ABCAPILogger();
    return {
        start(callerId) {
            localLogger.start(callerId);
            abcAPILogger.start(callerId);
        },
        end(callerId) {
            localLogger.end(callerId);
            abcAPILogger.end(callerId);
        }
    }
}

function Task(id, logger, a) {
    logger.start(id);
    // heavy-task
    let returnValue = a * a;
    logger.end(id);
    return returnValue;
}

let abcAPILogger = ABCAPILogger();
let localLogger = LocalLogger();
let bothLogger = LocalAndABCAPILogger();

const Task1Id = "Task 1";
Task = Task.bind(null, Task1Id, localLogger);

console.log(Task(5));

console.log(localLogger.get(Task1Id))