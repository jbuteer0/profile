
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    type: "input",
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function(response) {
    const queryUrl = `https://api.github.com/users/${response.username}`;
    console.log(queryUrl)
    axios.get(queryUrl)
      .then((results)=>{
        console.log(results.data)
        const rez = results.data
var profile = `${rez.name}  
Bio: ${rez.bio}  
Repo URL: ${rez.html_url}  
`
fs.writeFile(`${rez.name}.md`,profile, err=>{
  if (err) console.log(err)
  console.log("success")
} )
console.log(profile)
      
      })
  });



