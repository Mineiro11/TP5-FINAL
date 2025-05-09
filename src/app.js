import Time from './time.js';
import express from "express";

const app = express();
app.get('/',(req,res)=> {
    res.send(Time.obtenerHoraActual());
});
 app.get('/fecha-completa',(req,res)=>{
    res.send(Time.obtenerFechaCompleta());
 });

 export default app