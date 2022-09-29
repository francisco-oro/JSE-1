let vessel = {
    latitude: 40.07288,
    longitude: 154.48535,
    course: 285.6,
    speed: 14.0,
    imo: 9175717,
    name: "MARENO"
}

for(let property in vessel){
    console.log(`${property}: ${vessel[property]}`);
}