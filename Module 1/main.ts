const inputNb1 = document.querySelector("#nb1") as HTMLInputElement;
const inputNb2 = document.querySelector("#nb2")as HTMLInputElement;
const divResultat = document.querySelector(".resultat") as HTMLDivElement;
document.querySelector("#calcul").addEventListener("click", () => {
    let resultat = addition(+inputNb1.value, +inputNb2.value);
    divResultat.innerHTML = resultat.toString();
});

function addition(nb1:number, nb2:number){
        return nb1 + nb2;
}