import github from './github';
import user from './user';

export default ngModule => {
    ngModule.factory('$github', github);
    ngModule.factory('$user', user);
};
