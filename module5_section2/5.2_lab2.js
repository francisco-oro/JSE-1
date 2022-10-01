function showContact(list, index){
    if((list instanceof Array === true) && (Number.isInteger(index) === true)){
        alert(`name: ${list[index].name} / phone: ${list[index].phone} / email: ${list[index].email}`);
    } else {
        alert("Error: Invalid list or index");
    }
}
function showAllContacts(list){
    if(list instanceof Array === true){
        let i = 1;
        for(let contact of list){
            alert(`contact[${i}] name: ${contact.name} / phone: ${contact.phone} / email: ${contact.email}`)
            i++;
        } 
    } else {
        alert("Error: Invalid list");
    }
}
function addNewContact(list, name, phone, email){
    if((list instanceof Array === true) && name != null && phone != null && email != null){
        list.push({
            name: name,
            phone: phone, 
            email: email
        });
        return list;
    } else {
        return list;
    }
}
function sort(list, parameter){
    switch(parameter){
        case 'name':
        case 'NAME':
        case 'Name':
            list.sort((a, b) => (a > b) ? 1 : -1);
            break;
        case 'phone':
        case 'PHONE':
        case 'Phone':
            list.sort((a, b) => (a > b) ? 1 : -1);
            break;
        case 'email':
        case 'EMAIL':
        case 'Email':
            list.sort((a,b) => (a > b) ? 1 : -1);
            break; 
    }
    return list;
}
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
    let choose = prompt("Input a command: /first: Displays the first contact, /last: Displays the last contact, /all: Displays all contacts, /new: Adds a new contact, /quit: Exits the program, /showContact: Displays the contact with the given index, /sort: Sorts the contacts of the list:");
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
            showAllContacts(contacts);
            break;
        case '/new':
            let newName = prompt("Input a name for the new contact:");
            let newPhone = prompt("Input a phone number:");
            let newEmail = prompt("Input a email:");
            contacts = addNewContact(contacts, newName, newPhone, newEmail);
            break;
        case '/showContact':
            let index = Number(prompt("Input the index of the contact that you want to see"));
            showContact(contacts, index);
            break;
        case '/sort':
            let parameter = prompt("Sort contacts by: [name], [email], [phone]?:");
            contacts = sort(contacts, parameter);
            break;
        default:
            alert(choose + " is not a valid command");
            break; 
    }
}