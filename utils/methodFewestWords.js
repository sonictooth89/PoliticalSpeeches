// const csv = [ { Speaker: 'Bernhard Belling', Topic: 'Coal Subsidies', Date: '2012-11-05', Words: 1210 }, { Speaker: 'Caesare Collins', Topic: 'Coal Subsidies', Date: '2012-11-06', Words: 1119 }, { Speaker: 'Alexander Abel', Topic: 'Internal Security', Date: '2012-12-11', Words: 911 }, { Speaker: 'Alexander Abel', Topic: 'Education Policy', Date: '2012-10-30', Words: 5310 }];

// Politican with the most speeches on the topic "Internal security"
const fewestWords = (data) => {
  
  const speakersWords = {};

  data.forEach(el => {
    if(!speakersWords[el.Speaker]){
      speakersWords[el.Speaker] = el.Words;
    } else {
      speakersWords[el.Speaker] += el.Words;
    };
  }); //{'Bernhard Belling': 1210,'Caesare Collins':1119,  'Alexander Abel': 6221}

  const arrSpeakersWords = Object.values(speakersWords); // [1210, 1119, 6221]
  const arrSpeakers = Object.keys(speakersWords); // ['Bernhard Belling', 'Caesare Collins', 'Alexander Abel']

  const minValue = Math.min(...arrSpeakersWords)// 6221
  const minValueIndex = arrSpeakersWords.indexOf(minValue);

  const result = arrSpeakers[minValueIndex];
  
  return data.length ? result : null;
};


// console.log(fewestWords(csv));


module.exports = {
  fewestWords
}