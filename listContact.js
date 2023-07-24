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

console.log(listContact);



function deleteContact(contact){
    const datos = contact.split("");
    const name = datos[0];
    const lastName = datos [1];
    for(let i = 0; i < listContact.length; i++){
        if(listContact[i].name === name && listContact[1].lastName === lastName){
            return listContact.splice(i, 1);
        }
    }
}


//deleteContact("Elio Vega");
//console.log(listContact);//


function printContact(){
    console.log("List Contact:"); 
     for (let i = 0; i < listContact.length; i++)
        console.log(listContact[i]);
}


//printContact(listContact);//