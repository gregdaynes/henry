import registerAppFooter from './app-footer';
import registerAppHeader from './app-header';

export default ngModule => {
    registerAppFooter(ngModule);
    registerAppHeader(ngModule);
};
