import angular from 'angular';

import 'angular-ui-router';
// import 'angular-animate';
// import 'angular-toastr';
// import 'angular-locker';

import run from './run';
import config from './config';
import registerDirectives from './directives';
import registerViews from './views';

const ngModule = angular.module('henry', [
    'ui.router',
    // 'ngAnimate',
    // 'toastr',
    // 'angular-locker',
]);


run(ngModule);
config(ngModule);

registerViews(ngModule);
registerDirectives(ngModule);
