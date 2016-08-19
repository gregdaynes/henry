import Github from "github-api";

let github = null;

export default function() {
    return (username, password) => {
        if (!github) github = new Github({ username, password });

        return github;
    };
}
