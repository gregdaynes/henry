import login from './login';
import repo from './repo';
import repoList from './repo-list';
import repoBreadcrumb from './repo-breadcrumb';
import repoView from './repo-view';
// import editor from './editor';

export default ngModule => {
    ngModule.config(login);
    ngModule.config(repo);
    ngModule.config(repoList);
    ngModule.config(repoBreadcrumb);
    ngModule.config(repoView);
    // ngModule.config(editor);
};
