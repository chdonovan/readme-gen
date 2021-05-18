// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
<h1 align="center"> ${answers.title}</h1>

![badge](https://img.shields.io/badge/License-${answers.license}-brightgreen.svg)<br />

## Description
${answers.description}

## Table of Contents
-[Description](#description)
-[Instalation](#instalation)
-[Usage](#usage)
-[Contributing](#contributing)
-[Tests](#tests)
-[License](#license)

## Instalation
${answers.instalation}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Tests
${answers.testing}
## License
${answers.license}

## username
My GitHub: [${answers.username}](https://github.com/${answers.username})<br />

## Email
Email me with and questions! ${answers.email}

 ### README generated with readme gen
    `;
}


module.exports = generateMarkdown;
