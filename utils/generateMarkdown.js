// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge ;
function renderLicenseBadge(license) {
  if (license !== "None") {
    licenseBadge = `![badge](https://img.shields.io/badge/License-${license}-blue)` ; 
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let licenseLink;
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

      break;

    case 'Apache_2.0':
      licenseLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

      break;

    case 'BSD_2.0':
      licenseLink = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)' 

      break;

    case 'BSD_3.0':
      licenseLink = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'

      break;

    case 'Eclipse_1.0':
      licenseLink = '[Eclipse 2.0 License](https://docs.oracle.com/en/database/data-integration/data-transforms/licensing/eclipse-public-license-v-2.0.html)'

      break;

    case 'GNU_2.0':
      licenseLink = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'

      break;

    case 'GNU_3.0':
      licenseLink ='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

      break;

    case 'Mozilla_2.0':
      licenseLink = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'

      break;


    default:
      licenseBadge = 'N/A';
      break;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// const licenseSection = [];
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  renderLicenseBadge(`${data.license}`);
  renderLicenseLink(`${data.license}`);
  // console.log(data)
  return `
  
  # ${data.title}

  ${licenseBadge}


  ## Description
  
  ${data.Description}

  
  ## Table of Contents
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.Installation}
  
  ## Usage
  ${data.Usage}

  
  ## Credits
  ${data.Credits}
 
  
  ## License

  ${data.license}

  ${licenseLink}

  
  ## Features
  ${data.Features}
  
  ## Tests
  ${data.Tests}

  ## Questions 

  Contact me:
  Github: ${data.Github}
  
  Email: ${data.Email}
`;
}

module.exports = generateMarkdown;
