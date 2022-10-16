

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Usage Information](#usage-information)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Licensing](#licensing)
  - [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation Instructions
  ${data.installation}
  
  ## Usage Information
  "${data.usage}"
  
  ## Contribution Guidelines
  ${data.contribution}
  
  ## Test Instructions
  ${data.test}
  
  ## Licensing
  This project is licensed under ${data.tests}
  
  ## Questions
  Here is a link to my [GitHub Profile](https://github.com/${data.gitUser}) and the [GitHub Repository](https://github.com/${data.gitUser}/${data.repo}) for this project.
  
  If you would like to ask any questions you can reach me via email at:
  - ${data.email}`;
}

module.exports = generateMarkdown;
