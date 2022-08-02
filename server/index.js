import express from "express";
import morgan from 'morgan';
import { Server as SocketServer } from "socket.io";
import http from 'http'
import cors from 'cors'
import PORT from './config.js'

const app = express();
const server = http.createServer(app)
const io = new SocketServer(server, {
    cors: {
        origin: 'http://localhost:3000',
    }
})

app.use(cors())
// morgan for terminal dump info
app.use(morgan('dev'))

io.on('connection', ()=> {
    console.log('Socket.io connected')
})

server.listen(PORT);
console.log('Server started on port ', PORT);