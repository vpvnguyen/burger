$(function () {

    // add burger to db
    $('#add-burger').on('click', function (event) {
        event.preventDefault();
        var burgerName = $('#burger-name').val().trim();
        var burgerObj = { burgerName: burgerName };
        var route = '/burgers';

        // POST request to add burger
        $.ajax(route, {
            type: 'POST',
            data: burgerObj
        }).then(() => {
            console.log(`POST: ${burgerObj}`);
            location.reload();
        });
    });

    // change state of devoured on click
    // why doesnt arrow function work here? (event) => {} returns PUT 404
    $('.change-devoured').on('click', function (event) {
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
        }).then(() => {
            console.log(`PUT: ${newDevouredState}`);
            location.reload();
        });
    });
});
