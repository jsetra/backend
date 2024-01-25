const WebSocket = require('ws');
const os = require('os');

// Variable booleana inicial
let estado = false;

// Función para enviar el estado actual a todos los clientes conectados
function enviarEstado(ws) {
    ws.send(JSON.stringify({ estado }));
}

function initWebSocket(server) {
    // Crear un servidor WebSocket
    const wss = new WebSocket.Server({ server });

    wss.on('connection', function connection(ws) {
        console.log('Cliente conectado');

        // Enviar el estado actual al cliente cuando se conecta
        enviarEstado(ws);

        // Manejar mensajes del cliente
        ws.on('message', function incoming(message) {

            console.log('Mensaje recibido:', message); // Imprimir el mensaje recibido en consola

            // Cambiar el estado de acuerdo al mensaje recibido
            estado = !estado;

            console.log('estado:', estado);

            // Enviar el nuevo estado a todos los clientes
            wss.clients.forEach(function each(client) {
                if (client.readyState === WebSocket.OPEN) {
                    enviarEstado(client);
                }
            });
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

    console.log(`Servidor WebSocket iniciado en ws://${serverAddress}:5000`);
}

module.exports = initWebSocket;