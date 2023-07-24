let listContact = [];

function addContact(name, lastName, phone, city, address ){
    const newContact = {
        id: listContact.length + 1,
        name,
        lastName,
        phone,
        location:{
            city,
            address
        }
    }
    return listContact.push(newContact);
}




addContact("Elio", "Vega", 3192335588, "Bogota", "Cll 63 # 77a-50");
addContact("Sofia", "Ramirez", 3205889655, "Bogota", "Crr 79 # 19-19")
addContact("Patricia", "Cuevas", 3115692145, "Bogota", "Crr 111b # 101-20")

//console.log(listContact)//




function findContact(contact) {
    const [name, lastName] = contact.split(" ");
    
    const indiceContacto = listContact.findIndex(contactFilter => {
      return contactFilter.name === name && contactFilter.lastName === lastName;
    });
    
    return indiceContacto !== -1 ? indiceContacto : -1;
  }



  function deleteContact(contact) {
    const indice = findContact(contact);
    if (indice == -1){
        return listContact;
    }
    return listContact.splice(indice, 1);
}


deleteContact("Elio Vega");
console.log(listContact);





function updateContact(contact, datos) {
    const indice = findContact(contact);
    if (indice == -1){
        return listContact;
    }
    listContact[indice] = { ...listContact[indice], ...datos };
}




function printContact(){
    console.log("List Contact:"); 
     for (let i = 0; i < listContact.length; i++)
        console.log(listContact[i]);
}


printContact(listContact);