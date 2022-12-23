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
