import login from './login';
import repo from './repo';
import repoList from './repo-list';
import repoCode from './repo-code';

export default ngModule => {
    ngModule.config(login);
    ngModule.config(repo);
    ngModule.config(repoList);
    ngModule.config(repoCode);
};
