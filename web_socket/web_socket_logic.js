const WebSocket = require('ws');
const os = require('os');


// Variable booleana inicial
let estado = false;

// Lista de clientes conectados
const clientes = [];

// Función para enviar el estado actual a todos los clientes conectados
function enviar_estado(ws) {
    ws.send(JSON.stringify({ estado: estado }));
}

function initWebSocket(server, path) {
    // Crear un servidor WebSocket
    const wss = new WebSocket.Server({ server, path });

    wss.on('connection', function connection(ws) {
        clientes.push(ws);
        console.log('Cliente conectado');

        // Enviar el estado actual al cliente cuando se conecta
        enviar_estado(ws);

        ws.on('message', function incoming(data) {
            console.log('Mensaje recibido:', data);

            estado = !estado;

            console.log('estado:', estado);

            clientes.forEach(function each(client) {
                enviar_estado(client);
            });
        });

        ws.on('close', function close() {
            console.log('Cliente desconectado');
            const index = clientes.indexOf(ws);
            if (index > -1) {
                clientes.splice(index, 1);
            }
            estado = false;
        });
    });

    // Obtener la dirección IP del servidor
    const interfaces = os.networkInterfaces();
    let serverAddress = '';

    Object.keys(interfaces).forEach((interfaceName) => {
        interfaces[interfaceName].forEach((iface) => {
            if (iface.family === 'IPv4' && !iface.internal) {
                serverAddress = iface.address;
            }
        });
    });

    console.log(`Servidor WebSocket iniciado en ws://${serverAddress}:5000${path}`);
}

module.exports = initWebSocket;
