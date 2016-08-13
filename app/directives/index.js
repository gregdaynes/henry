import registerAppFooter from './app-footer';
import registerAppHeader from './app-header';
import registerAuth from './auth';

export default ngModule => {
    registerAppFooter(ngModule);
    registerAppHeader(ngModule);
    registerAuth(ngModule);
};
