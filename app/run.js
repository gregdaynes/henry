export default ngModule => {
    ngModule.run(($log, $rootScope, $state, $stateParams, $location, githubService) => {
        'ngInject';
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $log.info('running..');

        // if (!githubService()) $location.path('/login');

        // $config.get();
    });
};
