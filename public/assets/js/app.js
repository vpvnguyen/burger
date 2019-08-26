$(function () {
    // change state of devoured on click
    $('.change-devoured').on('click', function (event) {
        event.preventDefault();
        var name = $(this).attr('value');
        var id = $(this).attr('id');
        var route = $(this).data('route');

        var newDevouredState = {
            name: name,
            id: id,
            route: route
        }

        $.ajax(route, {
            type: 'PUT',
            data: newDevouredState
        }).then(function () {
            console.log(`PUT: ${newDevouredState}`);
            location.reload();
        });
    });
});
