export default function ConfigService($log, $http, locker) {
    const localStorage = locker.namespace('henry');
    let config = null;

    return {
        set,
        get,
    };

    // -------------------------

    function set(data) {
        config = data;
        localStorage.put('config', data);

        return Promise.resolve().then(() => config);
    }

    function get() {
        if (!config) {
            config = getConfig();
        } else {
            config = localStorage.get('config');
        }

        return Promise.resolve().then(() => config);
    }

    // -------------------------

    function getConfig() {
        $log.info('getting config');

        return $http.get('/config.json')
            .then(response => set(response))
            .then(() => get());
    }
}
