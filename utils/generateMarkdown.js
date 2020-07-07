// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

Table of Contents: |
------------- |
[Description](#description)|
[Installation](#installation)|
[Usage](#usage)|
[License](#license)|
[Contribution](#contribution)|
[Tests](#tests)|
[Questions](#questions)|

# Description
${data.description}

# Installation
${data.installation}

# Usage
${data.usage}

# License
${data.license}

# Contribution
${data.contribution}

# Tests
${data.tests}

# Questions
${data.questions}
If you have any additional questions please reach me at (https://github.com/${data.gitHub}/) or e-mail me at ${data.email}

`;
}


module.exports = generateMarkdown;
