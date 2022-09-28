let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];
let newContact = {};
let choice = prompt('Input "first" to show the first contact, "last" to show the last contact, and "new" to create a new contact');
switch(choice){
    case "first":
        alert(`name: ${contacts[0].name} / phone: ${contacts[0].phone} / email: ${contacts[0].email}`);
        break;
    case "last":
        alert(`name: ${contacts[2].name} / phone: ${contacts[2].phone} / email: ${contacts[2].email}`);
        break;
    case "new":
        alert("Input the information about the new contact. If any field is missing, the contact won't be created");
        newContact.name = prompt("name: ");
        newContact.phone = prompt("phone: ");
        newContact.email = prompt("email: ");
        if(newContact.name != 0 && newContact.phone != 0 && newContact.email != 0){
            contacts.push(newContact);
        }
        break;
    default: 
        alert("Unknown input"); 
        break;
}
console.log(contacts[3].name);
console.log(contacts[3].phone);
console.log(contacts[3].email);