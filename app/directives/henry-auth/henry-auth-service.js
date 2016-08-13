export default function henryAuthService($rootScope, locker) {
    const localStorage = locker.namespace('henry');
    const USER_UPDATE_MESSAGE = 'userUpdateMessage';
    let user = null;

    return {
        set,
        get,
        onUpdate,
        unset,
    };

    // -------------------------

    function set(data) {
        user = data;
        localStorage.put('user', data);

        // publish event
        $rootScope.$broadcast(USER_UPDATE_MESSAGE, {
            user: data,
        });

        return Promise.resolve().then(() => data);
    }

    function get() {
        const promise = Promise.resolve();

        if (!user) { // no cached auth
            user = localStorage.get('user');
        }

        $rootScope.$broadcast(USER_UPDATE_MESSAGE, {
            user,
        });

        return promise.then(() => user);
    }

    function onUpdate($scope, handler) {
        $scope.$on(USER_UPDATE_MESSAGE, (event, message) => {
            handler(message.user);
        });
    }

    function unset() {
        user = null;
        localStorage.empty();

        $rootScope.$broadcast(USER_UPDATE_MESSAGE, {
            user: false,
        });

        return Promise.resolve().then(() => user);
    }
}
