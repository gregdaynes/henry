import registerHelloWorld from './hello-world';
import registerAppFooter from './app-footer';
import registerAppHeader from './app-header';

export default ngModule => {
    registerHelloWorld(ngModule);
    registerAppFooter(ngModule);
    registerAppHeader(ngModule);
};

