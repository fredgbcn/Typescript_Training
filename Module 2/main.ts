let   prenom = "Fred";
let age = 38;
let sexe = true;
const sports = ["roller", "yoga"];
const adresse = {
    ligne : "rue Eiffel",
    ville : " Strasbourg ",
    cp:67000
}


let afficherPersonne = (
    in_prenom:string, 
    in_age:number,
    in_sexe:boolean,  
    in_sports:string[], 
    in_adresse:{
        ligne : string;
        ville : string;
        cp : number;
    }
    ) : void => {
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
afficherPersonne(prenom, age, sexe, sports, adresse);

let anniversaire = (in_age:number) : number => {
    return in_age + 1;
}
let newAge:number;
newAge = anniversaire(age);
console.log("Age : " + newAge);

//Fonction callback
function displayResult(resultat:number) : void{
    console.log("Le résultat " + resultat)
}
function displayAge(age:number) : void{
    console.log("The age is : " + age)
}

function ajout(nb1:number, nb2:number, callback : (n: number) => void){
    let res = nb1 + nb2;
    callback(res)
}

ajout(10, 15, displayAge)

//Type Any
const personne:any[] = ["Ave", 34, true];
function displayPersonne(perso:any[]){
    for(let value of perso){
        console.log(value)
    }
}
displayPersonne(personne)

//Union de types

var information : string | number | boolean;
information = "Mathieu";
test(information)
information = 2;
test(information)

function test (in_input : string | number | boolean){
    if(typeof(in_input)=== "string"){
        console.log("chaine de caractères")
    }else if (typeof(in_input) === "number"){
        console.log("Nombre")
    }else if (typeof(in_input)==="boolean"){
        console.log("Booléan")
    }
}
//Surcharge de fonction
function ajouter(e1:number, e2: string): string;
function ajouter(e1:string, e2:string) : string;
function ajouter(e1:number, e2:number): number;
function ajouter(e1: number | string, e2: number | string) : number | string{
    if(typeof e1 ==="number" && typeof e2 === "number"){
        return e1 + e2
    }
    return e1.toString() + "" + e2.toString();
}
let calcul = ajouter(5, 15);
Math.floor(calcul)

let concatenation = ajouter("Fred", " G.")
console.log(concatenation.toUpperCase())

let concat2 = ajouter("32", " G.")
console.log(concat2.toUpperCase())

//Arrays

const notes =[10, 15, 20]
const prenoms=["Mathieu", "Fred", "Tya"]
const personnage:(string|number)[]=["Mathieu",31]
personnage[2]="prof"
const perso:[string,number]=["Mathieu", 31]; //TUPLE, entre crochets la forme est fixe
//perso[2] ne fonctionne pas car tableau strict.
const tab = [
    [10,12],
    [14,16],
    [18,20]
]
const tab2 = [  //const tab2: {}[] = [... pour spécifier que lee objets auront n'importe quelle forme. tab2: {x:number, y:number}[] = [... pour fixer
    {x:1, y:2},
    {x:2, y:3}
]
//Création de type
type Adress = {
    ligne: string;
    ville: string;
    cp: number;
}
type Point = {
    x:number;
    y:number;
}
function displayAdress (in_adr:Adress){
    console.log("Création de type :")
    console.log(in_adr.ligne);
    console.log(in_adr.cp + "" + in_adr.ville)
}
displayAdress(adresse);
displayAdress({ligne: "rue des truites", ville:" Paris ", cp: 75000})
const adress:Adress={
    ligne: "rue des roses",
    ville:"Lyon",
    cp: 69000
}