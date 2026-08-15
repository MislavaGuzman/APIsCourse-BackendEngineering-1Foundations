import express from 'express'; //HTTP 
import { envs } from './config/config';
import planetaryRoutes from './api-extractor-demo.routes';

const app = express();

//Middleware que permite a tu server entender payloads
app.use(express.json());

//Inicializando tus rutas
app.use('/api/planetary', planetaryRoutes );

/// Encender el server

app.listen(envs.PORT, () => {
    console.log(`Server Initialized`);
   console.log(`Endpoint disponible en: http://localhost:${envs.PORT}/api/planetary/today`) 
})

