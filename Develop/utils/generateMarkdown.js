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
  ${asnwers.description}

## Table of Contents
-[Description](#description)
-[Instalation](#instalation)
-[Usage](#usage)
-[Contributing](#contribution)
-[Tests](#tests)
-[Questions](#questions)
-[License](#license)

## Installation

## Usage

## Contribution

## Tests

## License

## Questions

## username

## email

Read me gen message
    `;
}


module.exports = generateMarkdown;
