import registerLoginForm from './login-form';
import registerHenryHeader from './henry-header';
import registerHenryFooter from './henry-footer';

export default ngModule => {
    registerLoginForm(ngModule);
    registerHenryHeader(ngModule);
    registerHenryFooter(ngModule);
};
