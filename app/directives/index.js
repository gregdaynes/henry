import registerLoginForm from './login-form';
import registerBreadcrumb from './breadcrumb';
import registerSiteFooter from './site-footer';

export default ngModule => {
    registerLoginForm(ngModule);
    registerBreadcrumb(ngModule);
    registerSiteFooter(ngModule);
};
