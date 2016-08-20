import login from './login';
import listRepo from './list-repo';

export default ngModule => {
    ngModule.config(login);
    ngModule.config(listRepo);
};
