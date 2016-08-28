import login from './login';
import repo from './repo';
import repoList from './repo-list';
import repoView from './repo-view';

export default ngModule => {
    ngModule.config(login);
    ngModule.config(repo);
    ngModule.config(repoList);
    ngModule.config(repoView);
};
