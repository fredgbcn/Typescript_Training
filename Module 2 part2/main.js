var p1 = {
    nom: "Marc",
    race: "humain",
    age: 32
};
var p2 = {
    nom: "Venum",
    race: "monstre",
    tribu: "Orc vert"
};
function afficherPersonnage(perso) {
    console.log("Nom : " + perso.nom);
    if (perso.race === "humain") { //indispensable, comme age n'est que dans Humain
        console.log("Age : " + perso.age);
    }
    if (perso.race === "monstre") {
        console.log("Tribu : " + perso.tribu);
    }
}
afficherPersonnage(p1);
afficherPersonnage(p2);
