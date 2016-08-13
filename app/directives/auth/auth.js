import Github from 'github-api';

export default () => {
    const vm = this;

    const gh = new Github({
        username: 'gregdaynes',
        password: 'xxxxx',
    });

    const me = gh.getUser();

    me.listStarredRepos()
        .then(data => {
            console.log(data);
        });
};
