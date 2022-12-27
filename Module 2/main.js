var prenom = "Fred";
var age = 38;
var sexe = true;
var sports = ["roller", "yoga"];
var adresse = {
    ligne: "rue Eiffel",
    ville: "Strasbourg",
    cp: 67000
};
var afficherPersonne = function (in_prenom, in_age, in_sexe, in_sports, in_adresse) {
    console.log("Prenom : ".concat(in_prenom));
    console.log("Age : " + in_age);
    console.log("Sexe : " + (in_sexe ? "Homme" : "Femme"));
    for (var _i = 0, in_sports_1 = in_sports; _i < in_sports_1.length; _i++) {
        var sport = in_sports_1[_i];
        console.log("Sport : " + sport);
    }
    console.log("Adresse : ");
    console.log(in_adresse.ligne);
    console.log(in_adresse.cp + "" + in_adresse.ville);
};
afficherPersonne(prenom, age, sexe, sports, adresse);
var anniversaire = function (in_age) {
    return in_age + 1;
};
var newAge;
newAge = anniversaire(age);
console.log("Age : " + newAge);
//Fonction callback
function displayResult(resultat) {
    console.log("Le résultat " + resultat);
}
function displayAge(age) {
    console.log("The age is : " + age);
}
function ajout(nb1, nb2, callback) {
    var res = nb1 + nb2;
    callback(res);
}
ajout(10, 15, displayAge);
//Type Any
var personne = ["Ave", 34, true];
function displayPersonne(perso) {
    for (var _i = 0, perso_1 = perso; _i < perso_1.length; _i++) {
        var value = perso_1[_i];
        console.log(value);
    }
}
displayPersonne(personne);
//Union de types
var information;
information = "Mathieu";
test(information);
information = 2;
test(information);
function test(in_input) {
    if (typeof (in_input) === "string") {
        console.log("chaine de caractères");
    }
    else if (typeof (in_input) === "number") {
        console.log("Nombre");
    }
    else if (typeof (in_input) === "boolean") {
        console.log("Booléan");
    }
}
function ajouter(e1, e2) {
    if (typeof e1 === "number" && typeof e2 === "number") {
        return e1 + e2;
    }
    return e1.toString() + "" + e2.toString();
}
var calcul = ajouter(5, 15);
Math.floor(calcul);
var concat = ajouter("Fred", " G.");
console.log(concat.toUpperCase());
var concat2 = ajouter("32", " G.");
console.log(concat2.toUpperCase());
