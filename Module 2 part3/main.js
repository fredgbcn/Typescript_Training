//propriété dynamique
var p1 = {
    nom: "Hugo",
    age: 33,
    poids: 60
};
p1.taille = 180;
//Enumération
var CLASSE;
(function (CLASSE) {
    CLASSE["GUERRIER"] = "Guerrier";
    CLASSE["VOLEUR"] = "Voleur";
    CLASSE["ARCHER"] = "Archer";
})(CLASSE || (CLASSE = {}));
;
var p2 = {
    nom: "Mat",
    classe: CLASSE.GUERRIER
};
console.log(CLASSE.GUERRIER);
console.log(p2);
//unknown never
var test; //au lieu de any pour éviter les incohérences
test = 31;
test = "Matthieu"; //...
var sexe;
if (typeof test === "boolean") {
    sexe = test;
}
console.log(typeof sexe); //Incohérence
function genererException(msg) {
    throw { message: msg };
}
//Récupérer Eléments du DOM
var inputNom = document.querySelector("#nom"); //Necessaire sinon erreur
inputNom.value = "test";
// le ?? permet de tester si une valeur n'est ni undefined ni null
