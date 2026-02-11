
// EXO 1 //

function bonneNote(note) {

    if(note > 20 || note < 0) {
        return false
    } else if(note >= 14)  {
        console.log("Bonne Note !")
    } else if (note < 14) {
        console.log("Note Normal")

    }
}

let note1 = 6
let note2 = 18
let note3 = 14


// EXO 2 //

bonneNote(note1)

function inverseBool(booleen) {

    if(booleen == true) {
    console.log("false")
    return true
    } else if(booleen == false) {
    console.log("True")
    return false
    
    }
}

// EXO 3 //

function trouveIndex (liste, nombre) {
    for (let i = 0; i < liste.length; i++) {
        if (liste[i] == nombre) {
            console.log(i);
            return i
        } 

    }
    return false
} 


const liste = [2, 7, 3, 1, 5];
const nombre = 0;
console.log(trouveIndex(liste, nombre));

// EXO 4 //

function dernierElement(liste) {
if(liste == []) 
    return false    
else if(liste[4] == 4) {
    return liste[4]
 }

}

//  EXO 4 (REAL ONE)

function supprimeDoublons(liste) {
    nouvelleListe = []

    for(let i=0; i < liste.length; i++) {
    let elementCourrant = liste[i]
    if (!nouvelleListe.includes(elementCourrant)) {

       }

    }
       console.log(nouvelleListe)
}

let liste2 = [3, 8, 6, 6]








