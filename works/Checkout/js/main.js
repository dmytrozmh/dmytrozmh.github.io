$(document).ready(function () {
    $(document).on('click, keyup', '#phone', function () {
        $('#phone').mask('+38(099)999-99-99');
    });
});