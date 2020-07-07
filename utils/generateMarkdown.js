// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

Table of Contents: |
------------- |
[Description](#description)|
[installation](#installation)|
[usage](#usage)|
[license](#license)|
[contribution](#contribution|
[tests](#tests)|
[questions](#questions)|




`;
}


module.exports = generateMarkdown;
