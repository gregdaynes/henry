import angular from 'angular';

import 'angular-ui-router';
import './directives/henry-auth';

import run from './run';
import config from './config';
import registerDirectives from './directives';
import registerViews from './views';
import registerConstants from './constants';

const ngModule = angular.module('henry', [
    'ui.router',
    'henry-auth',
]);

run(ngModule);
config(ngModule);

registerConstants(ngModule)
registerViews(ngModule);
registerDirectives(ngModule);
