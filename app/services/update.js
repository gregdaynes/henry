export default function updateService($log, githubService) {
    'ngInject';

    let gh = null;
    let config = null;

    const service = {
        init,
        checkUpdate,
        update,
    };

    return service;

    // --------------------------------

    function init(cfg, user) {
        config = cfg.data.henry;

        return githubService()
            .then(response => response.getRepo(user.login, config.update.repo))
            .then(setGh);
    }

    function checkUpdate() {
        return getManifest()
            .then(manifest => compareVersion(config.version, manifest.data.version))
            .then(newVersion => {
                if (newVersion) return newVersion;

                throw new Error();
            })
            .catch(() => false);
    }

    function update() {
        return getManifest()
            .then(manifest => compareVersion(config.version, manifest.data.version))
            .then(newVersion => {
                if (newVersion) return newVersion;

                throw new Error();
            })
            .then(getUpdate)

            .catch(err => {
                $log.error(err);
                throw new Error(err);
            });

        // get contents of update
        // write contents to local henry
        // return update complete
    }

    // --------------------------------

    function setGh(data) {
        gh = data;
        return Promise.resolve().then(() => gh);
    }

    function getManifest() {
        return gh.getContents(config.update.branch, config.update.versionFile, true);
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

    function getUpdate() {
        
    }
}
