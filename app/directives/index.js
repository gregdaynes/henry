import registerLoginForm from './login-form';
import registerBreadcrumb from './breadcrumb';

export default ngModule => {
    registerLoginForm(ngModule);
    registerBreadcrumb(ngModule);
};
