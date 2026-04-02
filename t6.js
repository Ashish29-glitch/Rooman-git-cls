let marks = [35, 80, 90, 45, 60];

console.log("Index of 90:", marks.indexOf(90));

console.log("First 3 Marks:", marks.slice(0, 3));

for (let i = 0; i < marks.length; i++) {
  if (marks[i] < 40) {
    marks.splice(i, 1);
    i--; 
   
  }
}

marks.splice(1, 0, 75);

console.log("After Removing Failed:", marks);