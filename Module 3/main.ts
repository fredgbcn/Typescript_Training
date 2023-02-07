class Voiture {
    

    constructor(private marque : string,
        private modele : string,
        private couleur : string,
        private nbPortes : number){}
    public afficherVoitue() {
        console.log('marque : ' + v1.marque);
        console.log('modele : ' + v1.modele);
        this.afficherCouleur();
        console.log('nbPortes : ' + v1.nbPortes);
    }
    private afficherCouleur(){ //ne peut plus s'utiliser en dehors de la class
        console.log('couleur' + this.couleur)
    }
   public modifierNbPortes(nbPortes : number){
        if(nbPortes === 5 || nbPortes === 3)
        this.nbPortes = nbPortes;
    }
}

var v1 = new Voiture("Toyota", "coquette", "vert fluo", 3);
var v2 = new Voiture("Ferrarette", "boulotte", "gris", 5);

v1.afficherVoitue();
console.log('-----------------------------------');
// v2.nbPortes = 3; ne marche plus à cause du private
v2.modifierNbPortes(5);

v2.afficherVoitue();


