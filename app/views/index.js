import login from './login';
import repo from './repo';
import repoList from './repo-list';
import repoCode from './repo-code';
import settings from './settings';

export default ngModule => {
    ngModule.config(login);
    ngModule.config(repo);
    ngModule.config(repoList);
    ngModule.config(repoCode);
    ngModule.config(settings);
};
