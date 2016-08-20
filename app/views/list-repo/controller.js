export default function listRepoController($scope, $log, $user, user, $github) {
    const vm = this;
    const list = null;

    const gh = $github();

    gh.getRepo(user.login, 'henry').getContents()
        .then(response => {
            console.log(response);
        });

    // $github().getRepo(user.login, 'henry')
    //     .then(response => {
    //         console.log(response);
    //     });
    //


}
