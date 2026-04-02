let group1 = ["Sita", "Ram"];
let group2 = ["Krishna", "Arjun"];

let merged = group1.concat(group2);

let str = merged.join(" ");

merged[1] = "Super Ram";

console.log("Merged:", merged);
console.log("String:", str);
console.log("Updated:", merged);