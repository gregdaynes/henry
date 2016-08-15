export default function henryAuthUserService($rootScope, locker, USER_UPDATE_MESSAGE) {
    const localStorage = locker.namespace('henry');
    let user = null;

    return {
        set,
        get,
        onUpdate,
        unset,
    };

    // -------------------------

    function _broadcast(data) {
        $rootScope.$broadcast(USER_UPDATE_MESSAGE, {
            data,
        });
    }

    // -------------------------

    function set(data) {
        user = data;
        localStorage.put('user', data);

        _broadcast(user);

        return Promise.resolve().then(() => user);
    }

    function get() {
        if (!user) { // no cached auth
            user = localStorage.get('user');
        }

        _broadcast(user);

        return Promise.resolve().then(() => user);
    }

    function onUpdate($scope, handler) {
        $scope.$on(USER_UPDATE_MESSAGE, (event, message) => {
            handler(message.data);
        });
    }

    function unset() {
        user = null;
        localStorage.empty();

        _broadcast(null);

        return Promise.resolve().then(() => user);
    }
}
