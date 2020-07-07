// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

Table of Contents: |
------------- |
[Description](#description)|
[Installation](#installation)|
[Usage](#usage)|
[License](#license)|
[Contribution](#contribution|
[Tests](#tests)|
[Questions](#questions)|

## Desciption
/n ${data.description{

##Installation
/n ${data.installation}

##Usage
/n ${data.usage}

##License
/n ${data.license}

## Contributions
/n ${data.contributions}

## Tests
/n ${data.tests}

## Questions
/n ${data.questions}




`;
}


module.exports = generateMarkdown;
