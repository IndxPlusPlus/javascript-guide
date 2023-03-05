let cache = {};

// Low cost worker
// May fail
function LocalCacheRead(id) {
    console.log("Local Cache Read operation");
    if (!id) {
        console.log("couldn't find: invalid id");
        return;
    }
    if (cache[id]) return cache[id];

    console.log("LocalCache couldn't find: user doesn't exist");
}

// High cost worker.
function DiskRead(id) {
    console.log("Disk Read operation");
    const users = require('./users.json')['users'];
    if (users[id]) {
        // save in cache and return.
        return cache[id] = users[id];
    }

    console.log("DiskRead couldn't find: user doesn't exist")
}


let findUsers = [2, 2];
for (let userId of findUsers) {
    // First try to find in local cache.
    // Do disk read (costly) if not found in the local cache.
    let user = LocalCacheRead(userId) || DiskRead(userId);

    if (user)
        console.log(`output: ${JSON.stringify(user)}`);

    console.log("\n=========\n");
}