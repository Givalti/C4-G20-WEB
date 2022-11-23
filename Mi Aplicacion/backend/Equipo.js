class Equipo {

    tipo = "entrada"

    constructor(tipo, marca, pre){
        this.marca = marca
        this.precio = pre
    }

    encender(){
        console.log("El equipo "+this.marca+"esta encendido");
        console.log("El equipo es del tipo: "+this.tipo);
    }
}

export default Equipo;