$(document).ready(() => {
    M.Sidenav.init($('.sidenav'));

    $('.topnav, .sidenav').click((e) => {
        M.Sidenav.getInstance($('.sidenav')).close();
    });
});