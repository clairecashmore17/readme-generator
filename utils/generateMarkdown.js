
const fs = require('fs');
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = templateData => {
//   return `# ${data.title}
// `
console.log(templateData.title)
    return `
    # ${templateData.title}
      <h2> made by ${templateData.gitName} </h2>
      <p>contant at ${templateData.email} </p>  
    ## Description
    ${templateData.description}
    
    
    ## Table of Contents (Optional)
    

    
    ## Installation
    ${templateData.install}
    
    
    ## Usage
    ${templateData.usage}
    

    
 
    
    
    
    ## License
    ${templateData.license}
    
    
    ## Badges
    Will add soon...
   
    
    ## Features
    Not sure if I want to add yet
   
    
    ## How to Contribute
    ${templateData.contribution}
    
    
    ## Tests
    ${templateData.test}
 
    `
;
}

// module.exports = generateMarkdown;
