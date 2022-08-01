import express from "express";
import morgan from 'morgan';

const app = express();

// morgan for terminal dump info
app.use(morgan('dev'))

app.listen(3000);
console.log('Server started on port 3000')