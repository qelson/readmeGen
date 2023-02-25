// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
return  `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[License Descrption](https://choosealicense.com/community/
)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseBadge(license)
  }
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.subject}

## Project Descripton:
${data.description}


### Table Of Contents

*[Contributors](#contributors)

*[license](license)

*[usage](usage)

*[installation](#installation)

*[testing](testing)

*[email](email)

*[questions](questions)

*[github](github)


#### Contributors
${data.contributors}

#### License
${renderLicenseSection(data.license)}



#### Usage
${data.usage}

#### Installation
${data.installation}


#### Tests
${data.tests}

#### Email
${data.email}

#### Questions
${data.contributors}

#### Username
[Github Profile](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
