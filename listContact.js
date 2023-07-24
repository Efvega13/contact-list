let listContact = ["Elio Vega","Kelly Miranda","Sofia Ramirez","Natalia Miranda","Patricia Cuevas","Sergio Gavalo"];

function addContact(name){
return listContact.push(name);
}

/*addContact("Maicol Vega");
console.log(listContact);*/

function deleteContact(name){
    for(let i = 0; i < listContact.length; i++){
        if(listContact[i] == name){
            return listContact.splice(i, 1);
        }
    }
}

/*deleteContact("Sofia Ramirez");
console.log(listContact);*/

function printContact(){
    console.log("List Contact:"); 
     for (let i = 0; i < listContact.length; i++)
        console.log(listContact[i]);
}

//Imprimir la lista de contactos//
printContact(listContact);