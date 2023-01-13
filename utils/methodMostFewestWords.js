// const csv = [ { Speaker: 'Bernhard Belling', Topic: 'Coal Subsidies', Date: '2012-11-05', Words: 1210 }, { Speaker: 'Caesare Collins', Topic: 'Coal Subsidies', Date: '2012-11-06', Words: 1119 }, { Speaker: 'Alexander Abel', Topic: 'Internal Security', Date: '2012-12-11', Words: 911 }, { Speaker: 'Alexander Abel', Topic: 'Education Policy', Date: '2012-10-30', Words: 5310 }];

// Politican with the most speeches on the topic "Internal security"
const mostFewestWords = (data) => {
  
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

  const speakerWithMostWords = () => {
    
    const maxValue = Math.max(...arrSpeakersWords); // 6221
    const maxValueIndex = arrSpeakersWords.indexOf(maxValue);
    return arrSpeakers[maxValueIndex];
  };

  return data.length ? speakerWithMostWords(): null;

};


// console.log(mostFewestWords(csv));


module.exports = {
  mostFewestWords
}