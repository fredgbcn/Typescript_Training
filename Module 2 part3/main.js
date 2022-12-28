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
