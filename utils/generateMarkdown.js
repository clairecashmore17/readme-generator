

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch( license ) {
        case "MIT":
            return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
            `
            
        case "Apache":
            return `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
            `
           
        case "Boost":
            return `
[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
            `
                
        case "BSD 3":
            return `
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
            `
        case "CC0":
            return `
[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)
            `
        case "EPL":
            return `
[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
            `
        case "GNU v3":
            return `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
            `
        case "IBM":
            return `
[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
            `
        case "ISC":
            return `
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
            `
        case "MPL":
            return `
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
            `
        case "ODC":
            return `
[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)
            `
        case "ODbL":
            return `
[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
            `
        case "Perl":
            return `
[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
            `
        case "OFL":
            return `
[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)
            `
        case "Unlicense":
            return `
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
            `
        case "WTFPL":
            return `
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
            `

   
    } 

    
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
    switch( license ) {
        case "MIT":
            return `
                [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
            `
            
        case "Apache":
            return `
            [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
            `
           
        case "Boost":
            return `
                [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
            `
                
        case "BSD 3":
            return `
                [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
            `
        case "CC0":
            return `
                [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)
            `
        case "EPL":
            return `
                [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
            `
        case "GNU v3":
            return `
                [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
            `
        case "IBM":
            return `
                [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
            `
        case "ISC":
            return `
                [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
            `
        case "MPL":
            return `
                [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
            `
        case "ODC":
            return `
                [![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)
            `
        case "ODbL":
            return `
                [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
            `
        case "Perl":
            return `
                [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
            `
        case "OFL":
            return `
                [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)
            `
        case "Unlicense":
            return `
                [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
            `
        case "WTFPL":
            return `
                [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
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
<p> Your license link for ${license} is ${renderLicenseLink(license)} </p>
    `
}
function generateTableOfContents(title,license){
    const lowerCaseTitle = title.toLowerCase();
    if(!license){
        return `
- [${title}](#${lowerCaseTitle})
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
- [${title}](#${lowerCaseTitle})
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
    const {title, description,install,usage,contribution,test,gitName,email,license} = templateData;

    return `
## ${title}
<h2> made by ${gitName} </h2>
<p>contact at ${email} </p> 
 
## Description
${description}


## Table of Contents 
${generateTableOfContents(title, license)}

## Installation
${install}


## Usage
${usage}


${renderLicenseSection(license)}


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
