// const csv = [ { Speaker: 'Bernhard Belling', Topic: 'Coal Subsidies', Date: '2012-11-05', Words: 1210 }, { Speaker: 'Caesare Collins', Topic: 'Coal Subsidies', Date: '2012-11-06', Words: 1119 }, { Speaker: 'Alexander Abel', Topic: 'Internal Security', Date: '2012-12-11', Words: 911 }, { Speaker: 'Alexander Abel', Topic: 'Education Policy', Date: '2012-10-30', Words: 5310 }];


// Politican with the most speeches in 2012
const mostSpeechesYear = (data) => {
  const rxDatePattern = /(2012-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  const arrYear = data.filter(el => el.Date=(rxDatePattern)); // Array with objects that the year have

  const arrSpeakers = arrYear.map(el => { // ['speaker1', 'speaker2', 'speaker3', 'speaker4']
    return el.Speaker;
  });
  
  // { 'Alexander Abel': 2, 'Bernhard Belling': 1, 'Caesare Collins': 1 }
  const countsObj = arrSpeakers.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1; 
    return prev
  }, {});

  const arrSpeakerSpeeches = Object.values(countsObj); // [ 2, 1, 1 ]
  
  const speakerWithMaxSpeeches = () => {
    const values = arrSpeakerSpeeches;
    const maxValue = Math.max(...values); // 2
    const maxValueIndex = arrSpeakerSpeeches.indexOf(maxValue);
    return arrSpeakers[maxValueIndex];
  };

  return arrYear.length ? speakerWithMaxSpeeches(): null;
};

// console.log(mostSpeechesYear(csv));

module.exports = {
  mostSpeechesYear
}