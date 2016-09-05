import github from './github';
import user from './user';
import config from './config';
import file from './file';
import breadcrumb from './breadcrumb';
import update from './update';

export default ngModule => {
    ngModule.factory('githubService', github);
    ngModule.factory('userService', user);
    ngModule.factory('configService', config);
    ngModule.factory('fileService', file);
    ngModule.factory('breadcrumbService', breadcrumb);
    ngModule.factory('updateService', update);
};
