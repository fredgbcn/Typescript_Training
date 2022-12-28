//propriété dynamique

type Personnage = {
    nom: string;
    poids : number;
    [props:string] : any;
}

const p1:Personnage = {
    nom:"Hugo",
    age:33,
    poids: 60
}
p1.taille = 180;

//Enumération
enum CLASSE {GUERRIER = "Guerrier", VOLEUR = "Voleur", ARCHER = "Archer"};
type Perso = {
    nom : string;
    classe : string;
}
type Voleur = {
    classe : CLASSE.VOLEUR
}
type Guerrier = {
    classe : CLASSE.GUERRIER
}
const p2:Perso & Guerrier = {
    nom: "Mat",
    classe: CLASSE.GUERRIER
}
console.log(CLASSE.GUERRIER)
console.log(p2)