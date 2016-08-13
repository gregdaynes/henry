import 'angular-locker';

import angular from 'angular';
import henryAuthUserService from './henry-auth-user-service';
import henryAuthGithubService from './henry-auth-github-service';
import henryAuthController from './henry-auth-controller';

export default angular.module('henry-auth', ['angular-locker'])
    .factory('henryAuthUserService', henryAuthUserService)
    .factory('henryAuthGithubService', henryAuthGithubService)
    .directive('henryAuth', () => {
        require('./henry-auth-style.scss');

        return {
            controller: henryAuthController,
            restrict: 'E',
            template: require('./henry-auth-template.html'),
            controllerAs: 'vm',
        };
    });
