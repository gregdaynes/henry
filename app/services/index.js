import github from './github';
import user from './user';
import config from './config';
import file from './file';
import breadcrumb from './breadcrumb';

export default ngModule => {
    ngModule.factory('$github', github);
    ngModule.factory('$user', user);
    ngModule.factory('$config', config);
    ngModule.factory('$file', file);
    ngModule.factory('$breadcrumb', breadcrumb);
};
