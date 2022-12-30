type DeviseType = {
    nom : string;
    code: string;
    symbole: string;
    rate: number;
}

const dollar:DeviseType = {
    nom : "Dollar",
    code: "Dol",
    symbole:"$",
    rate: 1
}
const euro:DeviseType = {
    nom : "euro",
    code: "eur",
    symbole:"€",
    rate: 1.2
}
const livre:DeviseType = {
    nom : "Livre",
    code: "Liv",
    symbole:"£",
    rate: 1.39
}

const yuan:DeviseType = {
    nom : "Yuan",
    code: "Yua",
    symbole:"&yen;",
    rate: 0.15
}
const devises:DeviseType[] = [dollar, euro, livre, yuan]
const inputMontant = document.getElementById("montant")! as HTMLInputElement;
console.log(devises)