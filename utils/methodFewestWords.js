// const csv = [ { Speaker: 'Bernhard Belling', Topic: 'Coal Subsidies', Date: '2012-11-05', Words: 1210 }, { Speaker: 'Caesare Collins', Topic: 'Coal Subsidies', Date: '2012-11-06', Words: 1119 }, { Speaker: 'Alexander Abel', Topic: 'Internal Security', Date: '2012-12-11', Words: 911 }, { Speaker: 'Alexander Abel', Topic: 'Education Policy', Date: '2012-10-30', Words: 5310 }];

// Politican with the most speeches on the topic "Internal security"
const fewestWords = (data) => {
  
  const speakersWords = {};

  data.forEach(row => {
    if(speakersWords[row.Speaker]){
      speakersWords[row.Speaker] += row.Words
    }
    if (!speakersWords[row.Speaker]) {
      speakersWords[row.Speaker] = row.Words
    }
  }); //{'Bernhard Belling': 1210,'Caesare Collins':1119,  'Alexander Abel': 6221}

  const arrSpeakersWords = Object.values(speakersWords);
  const arrSpeakers = Object.keys(speakersWords);

  const speakerWithFewestWords = () => {
    
    const minValue = Math.min(...arrSpeakersWords); // 6221
    const minValueIndex = arrSpeakersWords.indexOf(minValue);
    return arrSpeakers[minValueIndex];
  };

  return data.length ? speakerWithFewestWords() : null;

};


// console.log(fewestWords(csv));


module.exports = {
  fewestWords
}