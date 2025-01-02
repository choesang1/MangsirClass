//to set item in local storage
localStorage.setItem("name", "jhon");
localStorage.setItem("token", JSON.stringify({ token: "45fdfd5efd6" }));
localStorage.setItem("user", JSON.stringify({ name: "john" }));

//to get item in local storage

let token = localStorage.getItem("token");
let token1 = JSON.parse(localStorage.getItem("token"));

