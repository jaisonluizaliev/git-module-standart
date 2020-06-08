class Planet { //criamos uma classe normal
    constructor(name, surface_area) {
        this.name = name
        this.surface_area = surface_area
    }
    rotate() { //um metodo para rotacionar
        console.log("Rotacionando...")
    }
}

//export 
module.exports = Planet
//export default Planet