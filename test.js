/** @type {Array<{"name":"aftereffects","tags":["video","editor"],"versions":{"svg":["original","plain"],"font":["plain"]},"color":"#1F0740","aliases":[]}
>} */
const data = require('./devicon.json');

data.filter(item => !item.versions.font.includes('plain')).forEach(item => console.log(`${item.name}: ${JSON.stringify(item.versions)}`));

data.filter(item => !item.color).forEach(item => console.log(`${item.name}: ${JSON.stringify(item.versions)}`));

