// If there is no license, return an empty string
var licensePart1;
var licensePart2;
var licensePart3;

//![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  if (data.license === "None"){
    licensePart1='';
    licensePart2='';
    licensePart3='';
  }
  else {
    licensePart1=`![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)`;
    licensePart2='* [License](#license)';
    licensePart3=`## License
    This project is licensed under the ${data.license} license.`;
  }

  return `# ${data.projectName}
  ${licensePart1}
  ## Description
  ${data.decription}
  ## Table of Contents
  The following links for review:
  * [Installation](#installation)
  * [Usage](#usage)
  ${licensePart2}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`${data.commandLine1}\`\`\`
  ## Usage
  Use it to create goo readme.
  ${licensePart3}
  ## Contributing
  This project is opened for any other contributors.
  ## Tests
  To run tests, run the following command:
  \`\`\`${data.commandLine2}\`\`\`
  ## Questions
  If you have any questions about this repo, open an issue or contact me directly at ${data.email}. Or you can find me at [${data.gitHubName}](https://github.com/${data.gitHubName})
  `;
}

module.exports = generateMarkdown;




  