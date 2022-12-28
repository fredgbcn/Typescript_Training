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
//unknown never
let test : unknown; //au lieu de any pour éviter les incohérences
test = 31;
test = "Matthieu"; //...

var sexe : boolean; 
if(typeof test ==="boolean"){
sexe = test;
}
console.log(typeof sexe)//Incohérence

function genererException(msg:string): never {
   throw {message: msg}
}


//Récupérer Eléments du DOM
const inputNom = document.querySelector("#nom")! as HTMLInputElement; //Necessaire sinon erreur
inputNom.value ="test";
// le ?? permet de tester si une valeur n'est ni undefined ni null