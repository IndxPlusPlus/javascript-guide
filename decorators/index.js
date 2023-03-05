let userReader = {
    read(userId) {
        // disk read operation
        // CPU-heavy
        console.log("userReader: Reading from disk");
        const users = require('./users.json')['users'];
        if (users[userId]) {
            return users[userId];
        }
        throw new Error(`User with ${userId} userId doesn't exist`);
    }
}

const CacheDecorator = (func) => {
    const cache = {};
    return function () {
        if (cache.hasOwnProperty(arguments[0])) {
            console.log("CacheDecorator: Reading from cache");
            return cache[arguments[0]];
        }
        try {
            return cache[arguments[0]] = func(arguments[0]);
        } catch (e) {
            console.error(e);
        }
    }
}

userReader.read = CacheDecorator(userReader.read);

console.log(userReader.read(4)); // disk
console.log(userReader.read(4)); // cache

let bookReader = {
    read(bookId) {
        // disk read operation
        // CPU-heavy
        console.log("bookReader: Reading from disk");
        const books = require('./books.json')['books'];
        if (books[bookId]) {
            return books[bookId];
        }
        throw new Error(`Book with ${bookId} bookId doesn't exist`);
    }
}

bookReader.read = CacheDecorator(bookReader.read);

console.log(bookReader.read(2)); // disk
console.log(bookReader.read(2)); // cache