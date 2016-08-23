import Github from "github-api";

let github = null;

export default function gh() {
    return function() {

        if (arguments[0] === 'logout') {
            return logout();
        }

        if (arguments.length === 2) {
            return login(arguments);
        }

        return github;
    };
}

function login(args) {
    console.log('new login');

    github = new Github({ 
        username: args[0], 
        password: args[1],
    });

    return github;
}



function logout() {
    github = null;

    return github;
}
