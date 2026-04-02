let marks = {
  math: 85,
  science: 72,
  english: 90
};

let m = marks.math;
let s = marks.science;
let e = marks.english;

let avg = (m + s + e) / 3;

let grade, status, distinction;

// Check fail condition
if (m < 35 || s < 35 || e < 35 || avg < 50) {
  grade = "Fail";
  status = "Fail";
  distinction = "No";
} else {
  status = "Pass";

  if (avg >= 90) grade = "A+";
  else if (avg >= 75) grade = "A";
  else if (avg >= 60) grade = "B";
  else grade = "C";

  distinction = avg >= 75 ? "Yes" : "No";
}

console.log("Grade: " + grade + ", Status: " + status + ", Distinction: " + distinction);