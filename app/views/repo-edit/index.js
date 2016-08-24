import controller from './editor.controller';

export default ($stateProvider) => {
    $stateProvider
        .state('repo.editor', {
            url: '/editor',
            current: 'editor',
            pageTitle: 'Editor',
            views: {
                '@': {
                    template: require('./editor.template.html'),
                    controller,
                    controllerAs: 'vm',
                },
            },
            resolve: {
            },
        });
};
