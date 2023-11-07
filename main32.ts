// Checking usernames


let current_Users: string[] = ["user1", "user2", "user3", "user4", "user5" , "user6"];


let new_Users: string[] = ["user2", "user5" , "user6", "user7", "user8", "user9" , "user10"];

function isUsernameTaken(username: string) {
    return current_Users.indexOf(username) !== -1;
}

for (let i = 0; i < new_Users.length; i++)
 {
    let new_User = new_Users[i];
    if (isUsernameTaken(new_User)) {
        console.log(`Username '${new_User}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Username '${new_User}' is available.`);
    }
}

