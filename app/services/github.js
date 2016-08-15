export default function henryAuthGithubService($rootScope, locker, GITHUB_UPDATE_MESSAGE) {
    const sessionStorage = locker.namespace('henry')
                                 .driver('session');

    let gh = null;

    return {
        set,
        get,
        onUpdate,
        unset,
    };

    // -------------------------

    function _broadcast(data) {
        $rootScope.$broadcast(GITHUB_UPDATE_MESSAGE, {
            data,
        });
    }

    // -------------------------

    function set(data) {
        gh = data;
        sessionStorage.put('gh', gh);

        _broadcast(gh);

        return Promise.resolve().then(() => data);
    }

    function get() {
        const promise = Promise.resolve();

        if (!gh) { // no cached auth
            gh = sessionStorage.get('gh');
        }

        _broadcast(gh);

        return promise.then(() => gh);
    }

    function onUpdate($scope, handler) {
        $scope.$on(GITHUB_UPDATE_MESSAGE, (event, message) => {
            handler(message.data);
        });
    }

    function unset() {
        gh = null;
        sessionStorage.empty();

        _broadcast(null);

        return Promise.resolve().then(() => gh);
    }
}
