

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch( license ) {
        case "MIT":
return `<button><a href="${renderLicenseLink(license)}">[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</a></button>
`
            
        case "Apache":
return `<button><a href="${renderLicenseLink(license)}">[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)</a></button>
`
           
        case "Boost":
return `<button><a href="${renderLicenseLink(license)}">[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)</a></button>
`
                
        case "BSD 3":
return `<button><a href="${renderLicenseLink(license)}">[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)</a></button>
`
        case "CC0":
return `<button><a href="${renderLicenseLink(license)}">[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)</a></button>
`
        case "EPL":
return `<button><a href="${renderLicenseLink(license)}">[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)</a></button>
`
        case "GNU v3":
return `<button><a href="${renderLicenseLink(license)}">[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)</a></button>
`
        case "IBM":
return `<button><a href="${renderLicenseLink(license)}">[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)</a></button>
`
        case "ISC":
return `<button><a href="${renderLicenseLink(license)}">[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)</a></button>
`
        case "MPL":
return `<button><a href="${renderLicenseLink(license)}">[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)</a></button>
`
        case "ODC":
return `<button><a href="${renderLicenseLink(license)}">[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)</a></button>
`
        case "ODbL":
return `<button><a href="${renderLicenseLink(license)}">[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)</a></button>
`
        case "Perl":
return `<button><a href="${renderLicenseLink(license)}">[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)</a></button>
`
        case "OFL":
return `<button><a href="${renderLicenseLink(license)}">![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)</a></button>
`
        case "Unlicense":
return `<button><a href="${renderLicenseLink(license)}">[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)</a></button>
`
        case "WTFPL":
return `<button><a href="${renderLicenseLink(license)}">[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)</a></button>
` 
    }  
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
    switch( license ) {
        case "MIT":
return `https://opensource.org/licenses/MIT
`
            
        case "Apache":
return `https://opensource.org/licenses/Apache-2.0
`
           
        case "Boost":
return `https://www.boost.org/LICENSE_1_0.txt
`
                
        case "BSD 3":
return `https://opensource.org/licenses/BSD-3-Clause
`
        case "CC0":
return `http://creativecommons.org/publicdomain/zero/1.0/
`
        case "EPL":
return `https://opensource.org/licenses/EPL-1.0
`
        case "GNU v3":
return `https://www.gnu.org/licenses/gpl-3.0
`
        case "IBM":
return `https://opensource.org/licenses/IPL-1.0
`
        case "ISC":
return `https://opensource.org/licenses/ISC
`
        case "MPL":
return `https://opensource.org/licenses/MPL-2.0
`
        case "ODC":
return `https://opendatacommons.org/licenses/by/
`
        case "ODbL":
return `https://opendatacommons.org/licenses/odbl/
`
        case "Perl":
return `https://opensource.org/licenses/Artistic-2.0
`
        case "OFL":
return `https://opensource.org/licenses/OFL-1.1
`
        case "Unlicense":
return `http://unlicense.org/
`
        case "WTFPL":
return `http://www.wtfpl.net/about/
` 
    } 
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
    if(!license) {
        return '';
    }

    return `
## License
${renderLicenseBadge(license)}
    `
}
function generateTableOfContents(title,license){
        console.log("Your title is " + title);
//     const lowerTitle = title.toLowerCase();
    if(!license){
        return `
- [${title}](#${title})
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
        `
    }
    else {
        return `
- [${title}](#${title.toLowerCase()})
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
        `
    }
    
}
// TODO: Create a function to generate markdown for README
module.exports = templateData => {

    //destructure templateData for more readable code
    const {title, description, install ,usage, contribution, test,gitName, email, license} = templateData[0];
    console.log(license[0]);

    return `
## ${title}
<h2> made by ${gitName} </h2>
<p>contact at ${email} </p> 
 
## Description
${description}


## Table of Contents 
${generateTableOfContents(title, license[0])}

## Installation
${install}


## Usage
${usage}


${renderLicenseSection(license[0])}


## Features
Not sure if I want to add yet


## How to Contribute
${contribution}


## Tests
${test}
 
    `
;
}

// module.exports = generateMarkdown;
