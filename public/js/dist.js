$(function() {
    // $.get('http://192.168.31.225:3535/api/control/ultrasonic');
    $.ajax({
        url: "http://192.168.31.245:3535/api/control/ultrasonic",
        complete: function() {
            var script = $('<script src="http://192.168.31.245:3535/socket.io/socket.io.js"></script>');
            $('body').append(script);
            doSocket();
        }
    })
    var socket;

    function doSocket() {

        socket = io.connect('http://192.168.31.245:3535/');
        socket.on('myDistance', function(data) {
            $('#dist').text(data.dist + 'cm');
        });
    }

    $('.btnDist').click(function() {
        doSocket();
        socket.emit("startMyDistiance");
        // 
    });
    $('#btnClose').click(function() {
        socket.close();
    })
});