module.exports =  {
    get AU_IN_KM() {return 149587870}, //get pseudovariavel/constante
    convertAu(au) {
        return au * this.AU_IN_KM
    }

}



