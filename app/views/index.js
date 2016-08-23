import login from './login';
import repo from './repo';
import editor from './editor';

export default ngModule => {
    ngModule.config(login);
    ngModule.config(repo);
    ngModule.config(editor);
};
