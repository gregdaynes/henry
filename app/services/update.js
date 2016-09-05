export default function updateService($log, githubService) {
    'ngInject';

    let gh = null;
    let localGh = null;
    let config = null;
    let newVersion = null;
    let currentVersion = null;

    const service = {
        init,
        checkUpdate,
        update,
    };

    return service;

    // --------------------------------

    function init(cfg, user) {
        config = cfg.data;
        currentVersion = config.henry.version;

        return githubService()
            .then(response => Promise.all([
                response.getRepo(user.login, config.henry.update.repo),
                response.getRepo(user.login, config.repo),
            ]))
            .then(session => {
                gh = session[0];
                localGh = session[1];
                return gh;
            });
    }

    function checkUpdate() {
        return getManifest()
            .then(remoteVersion => compareVersion(currentVersion, remoteVersion))
            .then(newVersion => {
                if (newVersion) return newVersion;

                throw new Error();
            })
            .catch(() => false);
    }

    function update() {
        return getManifest()
            .then(remoteVersion => compareVersion(currentVersion, remoteVersion))
            .then(newVersion => {
                if (newVersion) return newVersion;

                throw new Error();
            })
            .then(getRemoteFile)
            .then(updateLocalVersion)
            .then(response => {
                $log.info('update complete. Please refresh your browser.');
                return response;
            })

            .catch(err => {
                $log.error(err);
                throw new Error(err);
            });
    }

    // --------------------------------

    function getManifest() {
        return gh.getContents(config.henry.update.branch, config.henry.update.versionFile, true)
            .then(remote => {
                newVersion = remote.data.version;
                return remote.data.version;
            });
    }

    function compareVersion(first, second) {
        const promise = Promise.resolve();

        const fv = first.split('.');
        const sv = second.split('.');

        if (fv[0] < sv[0]) return promise.then(() => true); // major
        if (fv[0] === sv[0] && fv[1] < sv[1]) return promise.then(() => true); // minor
        if (fv[0] === sv[0] && fv[1] === sv[1] && fv[2] < sv[2]) return promise.then(() => true); // patch

        return promise.then(() => second);
    }

    function getRemoteFile() {
        return gh.getContents(config.henry.update.branch, config.henry.update.dist, true);
    }

    function updateLocalVersion(remoteFile) {
        return localGh.writeFile(config.branch, config.path, remoteFile.data, 'updating to latest version', { encode: true })
            .then(() => {
                config.henry.version = newVersion;
                const configLocation = configPath();
                return localGh.writeFile(config.branch, configLocation, JSON.stringify(config), 'version bumping', { encode: true });
            });
    }

    function configPath() {
        if (config.configPath) return config.configPath;

        const parts = config.configPath.split('/').pop();
        parts.push('config.json');
        return parts.concat('/');
    }
}
