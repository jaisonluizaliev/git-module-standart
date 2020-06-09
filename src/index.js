const Planet = require("./planet")
const solarSystem = require("./solar_system")
const moment = require("moment")

//importando arquivos de outros arquivos por //modulos!

const earth = new Planet("Terra", 50100000)
earth.rotate()

solarSystem.planets.push(earth)
solarSystem.planets.push(new Planet("marte", 50520005))
solarSystem.planets.push(new Planet("plutão", 4545555))
solarSystem.planets.push(new Planet("jupiter", 88484848484))

console.log(solarSystem)

console.log(moment().format('h:mm:ss'))