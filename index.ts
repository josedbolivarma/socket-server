import Server from "./classes/server";
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

// BodyParser
server.app.use(
    bodyParser.urlencoded({ extended: true })
);


// CORS
server.app.use( cors({ origin: true, credentials: true }) );

// Rutas de servicios
server.app.use('/', router );
server.app.use( bodyParser.json() );

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
})