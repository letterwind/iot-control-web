$(function() {
    // $.get('http://192.168.31.225:3535/api/control/ultrasonic');
    // $.ajax({
    //     url: "http://192.168.31.120:80",
    //     complete: function() {
    //         var script = $('<script src="http://192.168.31.120/socket.io/socket.io.js"></script>');
    //         $('body').append(script);
    //         setTimeout(() => {
    //             doSocket();
    //         }, 1000);
    //     }
    // })
    var socket;

    function doSocket() {
        socket = io.connect('http://192.168.31.120:80/');
    }

    $('.btnFwd').click(function() {
        //socket.emit('start', { cmd: 'forward' });
        $.get('/arduino-dcmotors/forward');
    });

    $('.btnBack').click(function() {
        //socket.emit('start', { cmd: 'backward' });
        $.get('/arduino-dcmotors/backward');
    });

    $('.btnRight').click(function() {
        // socket.emit('start', { cmd: 'right' });
        $.get('/arduino-dcmotors/right');
    });

    $('.btnLeft').click(function() {
        // socket.emit('start', { cmd: 'left' });
        $.get('/arduino-dcmotors/left');
    });

    $('#btnStop').click(function() {
        // socket.emit('start', { cmd: 'stop' });
        $.get('/arduino-dcmotors/stop');
    })
});