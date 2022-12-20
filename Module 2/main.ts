let prenom = "Fred";
let age = 38;
let sexe = true;
const sports = ["roller", "yoga"];
const adresse = {
    ligne : "rue Eiffel",
    ville : "Strasbourg",
    cp:67000
}


let afficherPersonne = (in_prenom, in_sexe, in_age, in_sports, in_adresse) => {
    console.log(`Prenom : ${in_prenom}`);
    console.log("Age : " + in_age);
    console.log("Sexe : " + (in_sexe ? "Homme" : "Femme"));
    for (let sport of in_sports){
        console.log("Sport : " + sport)
    }
    console.log("Adresse : ");
    console.log( in_adresse.ligne);
    console.log( in_adresse.cp + "" + in_adresse.ville);
}
afficherPersonne(prenom, age, sexe, sports, adresse)