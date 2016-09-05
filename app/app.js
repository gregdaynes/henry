
import CodeMirror from 'codemirror';

import angular from 'angular';

import 'angular-ui-router';
import 'angular-ui-codemirror';
import 'angular-locker';

import run from './run';
import config from './config';
import registerServices from './services';
import registerDirectives from './directives';
import registerViews from './views';
import registerConstants from './constants';

// require('./app.scss');

window.CodeMirror = CodeMirror; /* global window */

const ngModule = angular.module('henry', [
    'ui.router',
    'angular-locker',
    'ui.codemirror',
]);

run(ngModule);
config(ngModule);

registerServices(ngModule);
registerConstants(ngModule);
registerViews(ngModule);
registerDirectives(ngModule);
