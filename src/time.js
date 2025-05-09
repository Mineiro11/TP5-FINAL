function obtenerHoraActual(){
    const tiempo=Date.now();
    const hoy = new Date(tiempo);
    return (`${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`)

}

const obtenerFechaCompleta = () => {
    const fecha=new Date();
    const opciones={
        weekday: 'long',
        day:'numeric',
        month:'long',
        year:'numeric',
        hour:'2-digit',
        minute:'2-digit',
        seconds:'2-digit',
    
    };
    return fecha.toLocaleString('es-AR', opciones);
}
export default {obtenerHoraActual, obtenerFechaCompleta}