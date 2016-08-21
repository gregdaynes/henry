export default ngModule => {
    ngModule.run(($log, $rootScope, $state, $stateParams, $location, $github, $config) => {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $log.info('running..');

        if (!$github()) $location.path('/login');

        $config.get();
    });
};
