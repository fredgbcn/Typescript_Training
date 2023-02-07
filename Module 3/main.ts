class Voiture {
    private marque;
    private modele;
    private couleur;
    private nbPortes;

    constructor(marque, modele, couleur,nbPortes){
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.nbPortes = nbPortes
        
    }
    public afficherVoitue() {
        console.log('marque : ' + v1.marque);
        console.log('modele : ' + v1.modele);
        this.afficherCouleur();
        console.log('nbPortes : ' + v1.nbPortes);
    }
    private afficherCouleur(){ //ne peut plus s'utiliser en dehors de la class
        console.log('couleur' + this.couleur)
    }
   modifierNbPortes(nbPortes : number){
        if(nbPortes === 5 || nbPortes === 3)
        this.nbPortes.Portes = nbPortes;
    }
}

var v1 = new Voiture("Toyota", "coquette", "vert fluo", 3);
var v2 = new Voiture("Ferrarette", "boulotte", "gris", 5);

v1.afficherVoitue();
console.log('-----------------------------------');
// v2.nbPortes = 3; ne marche plus à cause du private
v2.modifierNbPortes(5);

v2.afficherVoitue();


