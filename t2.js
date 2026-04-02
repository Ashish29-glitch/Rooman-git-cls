let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful - Admin Access Granted");
} 
else if (username === "user" && password === "0000") {
  console.log("Login successful - Limited Access Granted");
} 
else {
  console.log("Invalid Login");
}