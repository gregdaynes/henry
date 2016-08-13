import 'angular-locker';

import angular from 'angular';
import henryAuthService from './henry-auth-service';
import henryAuthController from './henry-auth-controller';

export default angular.module('henry-auth', ['angular-locker'])
    .factory('henryAuthService', henryAuthService)
    .directive('henryAuth', () => {
        require('./henry-auth-style.scss');

        return {
            controller: henryAuthController,
            restrict: 'E',
            template: require('./henry-auth-template.html'),
            controllerAs: 'vm',
        };
    });
