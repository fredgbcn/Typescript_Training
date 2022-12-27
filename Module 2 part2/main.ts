//Union des objets
interface Perso {
    nom : string;
    race: string;
}

interface Humain extends Perso {
    age:number;
    race: "humain",
}
interface Monstre extends Perso {
    tribu: string;
    race: "monstre",
}
type Personnage = Humain | Monstre;

const p1 : Humain = {
    nom : "Marc",
    race: "humain",
    age: 32
}
const p2 : Monstre = {
    nom : "Venum",
    race: "monstre",
    tribu: "Orc vert"
}
function afficherPersonnage(perso : Personnage){ //ou Humain | Monstre
    console.log("Nom : " + perso.nom);
    if (perso.race ==="humain"){//indispensable, comme age n'est que dans Humain
        console.log("Age : " + perso.age)
    }
    if(perso.race ==="monstre"){
        console.log("Tribu : " + perso.tribu )
    }
}
afficherPersonnage(p1)
afficherPersonnage(p2)