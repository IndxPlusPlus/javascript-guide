let user = null;

// console.log(user.address?.pincode);

// if (user.session?.userid && user.address?.line1){
//     console.log("Never execute");
// } else {
//     console.log("Will always execute")
// }

// if(!user.session?.userid){
//     // create userid if session exist
//     console.log("creating userid");
// }

let sessionCounter = 0;
user?.createSession(sessionCounter++);

console.log(`sessionCounter ${sessionCounter}`);