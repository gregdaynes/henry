export default ngModule => {
    ngModule.run(($log, $rootScope, $state, $stateParams) => {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $log.info('running..');
    });
};
