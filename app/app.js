import angular from 'angular';

import 'angular-ui-router';
import './directives/henry-auth';

import run from './run';
import config from './config';
import registerDirectives from './directives';
import registerViews from './views';

const ngModule = angular.module('henry', [
    'ui.router',
    'henry-auth',
]);


run(ngModule);
config(ngModule);

registerViews(ngModule);
registerDirectives(ngModule);
