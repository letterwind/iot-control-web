$(function() {
    $('.btnLed').click(function() {
        var id = $(this).attr('id');
        $.get('http://192.168.31.225:3535/api/control/led/' + id);
    });
});