const { csv1 }  = require('./csv/csv1');
const { csv2 }  = require('./csv/csv2');
const { csv3 }  = require('./csv/csv3');
const { csv4 }  = require('./csv/csv4');
const { mostSpeechesYear } = require('./methodMostSpeechesYear');
const { mostTopicSecurity } = require('./methodMostTopicSecurity');
const { mostFewestWords } = require('./methodMostFewestWords');


const mostSpeeches = mostSpeechesYear(csv1);



module.exports = {
    // mostSpeeches,
    // mostSecurity,
    // mostWords
}
