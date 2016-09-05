export default function updateService(githubService) {
    'ngInject';

    let gh = null;
    let config = null;

    const service = {
        init,
        checkUpdate,
        getUpdate,
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
        return getManifest();
        // connect to github,
        // get contents of repo update manifest
        // compare versions

        // return version to update
        // // error
    }

    function getUpdate() {
        // connect to github
        // get contents of repo update manifest
        // compare versions again - no double updating
        //
        // get contents of update
        // write contents to local henry
        // return update complete
        // // error
    }

    // --------------------------------

    function setGh(data) {
        gh = data;
        return Promise.resolve().then(() => gh);
    }

    function getManifest() {
        return gh.getContents(config.update.branch, config.update.versionFile)
            .then(console.log);
    }
}
