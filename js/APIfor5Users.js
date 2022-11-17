
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

const user1= data.results[1];
let {first,last}=user.name;
let {gender,email, phone}=user;
let age= user.dob.age;
let {city, state, country}=user.location;
let fullName= first +" "+ last;

document.querySelector("#fullName1").textContent = fullName;
document.querySelector("#age1").textContent = age;
document.querySelector("#gender1").textContent = gender;
document.querySelector("#location1").textContent = city + ","+ state;
document.querySelector("#country1").textContent = country;

const user2= data.results[2];
let {first,last}=user.name;
let {gender,email, phone}=user;
let age= user.dob.age;
let {city, state, country}=user.location;
let fullName= first +" "+ last;

document.querySelector("#fullName2").textContent = fullName;
document.querySelector("#age2").textContent = age;
document.querySelector("#gender2").textContent = gender;
document.querySelector("#location2").textContent = city + ","+ state;
document.querySelector("#country2").textContent = country;

const user3= data.results[2];
let {first,last}=user.name;
let {gender,email, phone}=user;
let age= user.dob.age;
let {city, state, country}=user.location;
let fullName= first +" "+ last;

document.querySelector("#fullName2").textContent = fullName;
document.querySelector("#age2").textContent = age;
document.querySelector("#gender2").textContent = gender;
document.querySelector("#location2").textContent = city + ","+ state;
document.querySelector("#country2").textContent = country;

const user4= data.results[3];
let {first,last}=user.name;
let {gender,email, phone}=user;
let age= user.dob.age;
let {city, state, country}=user.location;
let fullName= first +" "+ last;

document.querySelector("#fullName3").textContent = fullName;
document.querySelector("#age3").textContent = age;
document.querySelector("#gender3").textContent = gender;
document.querySelector("#location3").textContent = city + ","+ state;
document.querySelector("#country3").textContent = country;




}

getUser();


