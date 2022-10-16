
function generateLicenseBadge(license){
  return `![${license}](https://img.shields.io/badge/License-${license}-brightgreen)`
}
// function replaceCharacter(license){
//   const str = license;

//   const replaceCharacter = str.replaceAll('_', ' ');
//   console.log(replaceCharacter);
// }
// replaceCharacter();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const str = data.license;
  const replaceCharacter = str.replaceAll('_', ' ');
  
  return `# ${data.repo} ${generateLicenseBadge(data.license)}

  ## Description
  ${data.description}

  # Table of Contents
  - [Installation Instructions](#installation-instructions)
  - [Usage Information](#usage-information)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Licensing](#licensing)
  - [Questions](#questions)
  
  ## Installation Instructions
  ${data.installation}
  
  ## Usage Information
  "${data.usage}"
  
  ## Contribution Guidelines
  ${data.contribution}
  
  ## Test Instructions
  ${data.tests}
  
  ## Licensing 
  This project is licensed under ${replaceCharacter} license.
  
  ## Questions
  Here is a link to my GitHub Profile [${data.gitUser}](https://github.com/${data.gitUser}) and the [GitHub Repository](https://github.com/${data.gitUser}/${data.repo}) for this project.
  
  If you would like to ask any questions you can reach me via email at:
  - ${data.email}`;
}

module.exports = generateMarkdown;
