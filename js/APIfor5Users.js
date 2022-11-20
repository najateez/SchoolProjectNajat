



const api_url="https://randomuser.me/api/";

async function getUser(){

  const datalist=[]
  for(let i = 0; i < 5; i++){
  
const response= await fetch(api_url);

const data= await response.json();

datalist[i]=data.results[0];

  }
console.log(datalist);
var temp=" ";

datalist.forEach(user => {
  console.log(user)
let {first,last}=user.name;
let {gender,email, phone}=user;
let age= user.dob.age;
let {city, state, country}=user.location;
let fullName= first +" "+ last;

 temp += "<tr>";
   
      temp += "<td>" + fullName + "</td>"
      temp += "<td>" + age + "</td>"
      temp += "<td>" + gender + "</td>"
      temp +=  "<td>" + city + "</td>"
      temp +=  "<td>" + country + "</td></tr>";
         
        }
  );

  document.getElementById('data').innerHTML = temp;
 
}
getUser();