var Voiture = /** @class */ (function () {
    function Voiture(marque, modele, couleur, nbPortes) {
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.nbPortes = nbPortes;
    }
    Voiture.prototype.afficherVoitue = function () {
        console.log('marque : ' + v1.marque);
        console.log('modele : ' + v1.modele);
        this.afficherCouleur();
        console.log('nbPortes : ' + v1.nbPortes);
    };
    Voiture.prototype.afficherCouleur = function () {
        console.log('couleur' + this.couleur);
    };
    Voiture.prototype.modifierNbPortes = function (nbPortes) {
        if (nbPortes === 5 || nbPortes === 3)
            this.nbPortes = nbPortes;
    };
    return Voiture;
}());
var v1 = new Voiture("Toyota", "coquette", "vert fluo", 3);
var v2 = new Voiture("Ferrarette", "boulotte", "gris", 5);
v1.afficherVoitue();
console.log('-----------------------------------');
// v2.nbPortes = 3; ne marche plus à cause du private
v2.modifierNbPortes(5);
v2.afficherVoitue();
