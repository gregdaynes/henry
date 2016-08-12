import angular from 'angular';

import 'angular-ui-router';
// import 'angular-animate';
// import 'angular-toastr';
// import 'angular-locker';

import run from './run';
import config from './config';
import registerDirectives from './directives';

const ngModule = angular.module('henry', [
    'ui.router',
    // 'ngAnimate',
    // 'toastr',
    // 'angular-locker',
]);


run(ngModule);
config(ngModule);
registerDirectives(ngModule);
