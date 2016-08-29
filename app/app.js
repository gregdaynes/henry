import angular from 'angular';

import 'angular-ui-router';
import 'angular-locker';

import run from './run';
import config from './config';
import registerDirectives from './directives';
import registerViews from './views';
import registerServices from './services';
import registerConstants from './constants';

const ngModule = angular.module('henry', [
    'ui.router',
    'angular-locker',
]);

run(ngModule);
config(ngModule);

registerConstants(ngModule);
registerViews(ngModule);
registerDirectives(ngModule);
registerServices(ngModule);