var database = [
    {
        username: "andrei",
        password: "supersecret"
    }, 
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all this learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool!"
    }
];

function signIn(username, password) {
    if (username === database[0].username 
        && password === database[0].password) {
            console.log(newsfeed);
        } else {
            alert("Sorry, wrong username and password!");
        }
    }