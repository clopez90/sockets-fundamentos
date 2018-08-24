const { io } = require('../server');
io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        // if (message.usuario) {
        //     callback({ resp: 'Todo salio bien' });
        // } else {
        //     callback({ resp: 'Todo salio mal' });
        // }
        client.broadcast.emit('enviarMensaje', data);
        console.log(data);
    });
});