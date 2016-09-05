import loginForm from './login-form';
import breadcrumb from './breadcrumb';
import siteFooter from './site-footer';
import updateNotification from './update-notification';

export default ngModule => {
    loginForm(ngModule);
    breadcrumb(ngModule);
    siteFooter(ngModule);
    updateNotification(ngModule);
};
