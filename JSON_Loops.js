var data = {
    "Name" : "Rj",
    "age" : 40,
    "Location" : "Madurai",
    "Vehicle" : "Himalayan RE"
};
let count = Object.keys(data).length;
for (let i = 0; i < count; i++) {
    let key = Object.keys(data);
    let val = Object.values(data);
    console.log(`${key[i]} : ${val[i]}`);
}
for (let i in data) {
    console.log(`${i} : ${data[i]}`);
}for (let i of Object.keys(data)){
    console.log(`${i} : ${data[i]}`);
}
Object.keys(data).forEach(function(i){
    console.log(`${i} : ${data[i]}`);
});