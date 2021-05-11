// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(asnwers) {
  return `
<h1 align="center"> ${answers.title}</h1>

![badge] here  

##Description
${answers.description}

## Table of Contents
-[Description](#description)
-[Instalation](#instalation)
-[Usage](#usage)
-[Contributing](#contribution)
-[Tests](#tests)
-[License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## License
${answers.license}

## username
My GitHub: [${answers.username}](https://github.com/${answers.username})<br />

## Email
Email me with and questions! ${answers.email}

Read me gen message
    `;
}


module.exports = generateMarkdown;
