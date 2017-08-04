/**
 * Created by yevheniia on 03.08.17.
 */
$(document).on('click', '#join', function () {
    join(function () {
        setTimeout(worker, 15000);
    });
});

function join(on_complete) {
    $.ajax({
        type: "POST",
        url: "/join",
        data: JSON.stringify({
            name: $('#name').textContent,
            email: $('#email').textContent,
            password: $('#password').textContent,
            password_confirmation: $('#password_confirmation').textContent
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        complete: on_complete
    });
}