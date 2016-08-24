import controller from './repo-view.controller';

export default ($stateProvider) => {
    $stateProvider
        .state('root.repo.view', {
            url: '/view',
            current: 'view',
            pageTitle: 'View File',
            views: {
                '@': {
                    controller,
                    controllerAs: 'vm',
                    template: require('./repo-view.template.html'),
                },
            },
            params: {
                file: null, 
            },
            resolve: {
                user: $user => $user.get(),
                config: $config => $config.get(),
                file: ($stateParams) => {
                    return $stateParams.file;
                } 
            }
        });
};
