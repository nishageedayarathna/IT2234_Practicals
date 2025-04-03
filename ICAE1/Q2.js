const students = require('./Data.js');

const languageSet = new Set();

for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].Pro_languages.length; j++) {
        languageSet.add(students[i].Pro_languages[j]);
    }
}

const uniqueLanguages = Array.from(languageSet);
console.log(uniqueLanguages);
