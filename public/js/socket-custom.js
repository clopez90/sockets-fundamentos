var socket = io();

//escuchamos cuando se conecta un usuario
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//escuchamos cuando se desconecta un usuario
socket.on('disconnect', function() {
    console.log('Perdimos conexion con servidor');
});

//Enviar informacion con el nombre del evento 'enviarMensaje'
socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola mundo'
}, function(resp) {
    // EL server ha ejecutado el callback y me ha mandado el objeto resp con algunt tipo de mensaje
    console.log('respuesta server: ', resp);
});

//Escuchar el evento con el nombre enviarMensaje 
socket.on('enviarMensaje', function(message) {
    console.log('Servidor: ', message);
});