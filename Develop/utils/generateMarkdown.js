// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
<h1 align="center"> ${answers.title}</h1>

![badge](https://img.shields.io/badge/License-${answers.license}-brightgreen.svg)<br />

## Description
${answers.description}

## Table of Contents
-[Description](#description)
</br>
-[Instalation](#instalation)
</br>
-[Usage](#usage)
</br>
-[Contributers](#contributers)
</br>
-[Tests](#tests)
</br>
-[License](#license)

## Instalation
${answers.instalation}

## Usage
${answers.usage}

## Contributers

the following users contributed to this project
</br>
${answers.contribution}

## Tests
${answers.testing}
## License

This project is covered under the ${answers.license} License
## username
My GitHub: [${answers.username}](https://github.com/${answers.username})<br />

## Email
Email me with any questions! ${answers.email}

 ### README generated with readmegen
    `;
}


module.exports = generateMarkdown;
