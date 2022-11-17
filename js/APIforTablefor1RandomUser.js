
const api_url="https://randomuser.me/api/";

async function getUser(){

const response= await fetch(api_url);

const data= await response.json();

const user= data.results[0];
let {first,last}=user.name;
let {gender,email, phone}=user;
let age= user.dob.age;
let {city, state, country}=user.location;
let fullName= first +" "+ last;

document.querySelector("#fullName").textContent = fullName;
document.querySelector("#age").textContent = age;
document.querySelector("#gender").textContent = gender;
document.querySelector("#location").textContent = city + ","+ state;
document.querySelector("#country").textContent = country;

}

getUser();
