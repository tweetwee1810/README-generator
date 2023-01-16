// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadge = [];
function renderLicenseBadge(license) {
  if (license !== "None") {
    licenseBadge.push(`![badge](https://img.shields.io/badge/License-${license}-blue)`);
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseLink = [];
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      licenseLink = ['[MIT License](https://opensource.org/licenses/MIT)']
      break;

    case 'Apache 2.0':
      licenseLink = ['[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)']

      break;

    case 'BSD 2.0':
      licenseLink = ['[BSD 2.0 License](https://opensource.org/licenses/BSD-2-Clause)']

      break;

    case 'BSD 3.0':
      licenseLink = ['[BSD 3.0 License](https://opensource.org/licenses/BSD-3-Clause)']

      break;

    case 'Eclipse 2.0':
      licenseLink = ['[Eclipse 2.0 License](https://docs.oracle.com/en/database/data-integration/data-transforms/licensing/eclipse-public-license-v-2.0.html)']

      break;

    case 'GNU 2.0':
      licenseLink = ['[GNU 2.0 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)']

      break;

    case 'GNU 3.0':
      licenseLink = ['[ License](https://www.gnu.org/licenses/gpl-3.0.en.html)']

      break;

    case 'Mozilla 2.0':
      licenseLink = ['[ License](https://www.mozilla.org/en-US/MPL/2.0/)']

      break;


    default:
      licenseBadge = ['N/A'];
      break;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const licenseSection = [];
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
 
  ## Description
  
${data.Description}

  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ## Usage
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:
  
  ![alt text](assets/images/screenshot.png)
  
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;
}

module.exports = generateMarkdown;
