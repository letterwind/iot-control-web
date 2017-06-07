$(function() {
    $('.btnTakePic').click(function() {
        var id = $(this).attr('id');
        $.ajax({
                'url': 'http://192.168.31.225:3535/api/control/camera',
            })
            .done(function(data) {
                setTimeout(() => {
                    $('#img1').attr('src', 'http://192.168.31.225:3535/img/ram/' + data);
                }, 1000);
            });
    });
});