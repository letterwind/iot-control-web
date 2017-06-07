$(function() {
    $('.btnTemp').click(function() {
        $.ajax({
                'url': 'http://192.168.31.225:3535/api/control/temperature',
            })
            .done(function(data) {
                setTimeout(() => {
                    $('#temp').text(data + "°C");
                }, 1000);
            });
    });
});