import github from './github';
import user from './user';
import config from './config';

export default ngModule => {
    ngModule.factory('$github', github);
    ngModule.factory('$user', user);
    ngModule.factory('$config', config);
};
