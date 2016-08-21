import login from './login';
import repo from './repo';

export default ngModule => {
    ngModule.config(login);
    ngModule.config(repo);
};
