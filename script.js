//! 1. Create your own resume data in JSON format

const myDetails =
{ 
    "firstName":"Kumaresan",
    "age":"24",
    "languagesKnown" :["Tamil", "English"],
    "mobileNo":"9876543210",
    "address":{
        "street":"MGS Street",
        "city":"Tirupur",
        "state":"Tamil Nadu"
    },
    "educationalQualification":"UG",
    "skills": ["Html","Css","Javascript","Reactjs"]
};



//! 2. For the above JSON, iterate over all for loops (for, for in, for of, forEach)

// //* ForLoop
console.log("languagesKnown : ");
for (let i = 0; i < myDetails.languagesKnown.length; i++) {
    console.log(myDetails.languagesKnown[i]);
}


console.log(" "); // space creating for output better experience


//* For in
console.log("Address Values print in For-in Loop: ");
const value = Object.entries(myDetails.address)
for(var key in value){  
    console.log(value[key])    
}


console.log(" "); // space creating for output better experience


//* For of
console.log("Overall Values print in For-of Loop: ");
const values = Object.entries(myDetails.skills)
for (const iterator of values) {
    console.log(iterator)
}


console.log(" "); // space creating for output better experience


//* ForEach
console.log("Overall Values print in ForEach Loop: ");
const allDetails = Object.entries(myDetails)
allDetails.forEach((ele)=>console.log(ele))