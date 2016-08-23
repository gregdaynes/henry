import controller from './editor.controller';

export default ($stateProvider) => {
    $stateProvider
        .state('root.repo.editor', {
            url: '/repo/editor',
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
