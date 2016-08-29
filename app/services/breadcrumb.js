export default function BreadcrumbService($rootScope, BREADCRUMB_UPDATE_MESSAGE) {
    let breadcrumb = null;

    return {
        set,
        get,
        onUpdate,
        unset,
    };

    // -------------------------

    function _broadcast(data) {
        $rootScope.$broadcast(BREADCRUMB_UPDATE_MESSAGE, {
            data,
        });
    }

    // -------------------------

    function set(data) {
        breadcrumb = data;

        _broadcast(breadcrumb);

        return Promise.resolve().then(() => breadcrumb);
    }

    function get() {
        return Promise.resolve().then(() => breadcrumb);
    }

    function onUpdate($scope, handler) {
        $scope.$on(BREADCRUMB_UPDATE_MESSAGE, (event, message) => {
            handler(message.data);
        });
    }

    function unset() {
        breadcrumb = null;

        _broadcast(null);

        return Promise.resolve().then(() => breadcrumb);
    }
}
