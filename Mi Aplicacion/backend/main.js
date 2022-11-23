import Equipo from "./Equipo.js";
import Servicio from "./Servicio.js";

console.log("Hola Mundo");

const audifonos = new Equipo("JBL", 600);
audifonos.encender();

const reparacion = new Servicio(50);
reparacion.repararEquipo(audifonos, 8);

console.log(audifonos.precio);