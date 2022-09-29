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

while(true){
    let lastContact = contacts.length - 1;
    let choose = prompt("Input a command: /first: Displays the first contact, /last: Displays the last contact, /all: Displays all contacts, /new: Adds a new contact, /quit: Exits the program");
    if(choose == '/quit'){
        break;
    }
    switch(choose){
        case '/first':
            alert(`name: ${contacts[0].name} / phone: ${contacts[0].phone} / email: ${contacts[0].email}`);
            break;
        case '/last':
            alert(`name: ${contacts[lastContact].name} / phone: ${contacts[lastContact].phone} / email: ${contacts[lastContact].email}`);
            break;
        case '/all': 
            let i = 1 
            for(let contact of contacts){
                alert(`[${i}]name: ${contact.name} / phone: ${contact.phone} / email: ${contact.email}`);
                i++;
            }
            break;
        case '/new':
            let newName = prompt("Input a name for the new contact:");
            let newPhone = prompt("Input a phone number:");
            let newEmail = prompt("Input a email:");
            if(newName === null || newPhone === null || newEmail === null){
                alert("An error happened: The contact won't be created");
            } else {
                contacts.push({
                    name: newName,
                    phone: newPhone,
                    email: newEmail,
                });
                alert("Contact created succesfully!");
            }
            break;
        default:
            alert(choose + " is not a valid command");
            break; 
    }
}