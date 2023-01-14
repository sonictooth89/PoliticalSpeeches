// const csv = [ { Speaker: 'Bernhard Belling', Topic: 'Coal Subsidies', Date: '2012-11-05', Words: 1210 }, { Speaker: 'Caesare Collins', Topic: 'Coal Subsidies', Date: '2012-11-06', Words: 1119 }, { Speaker: 'Alexander Abel', Topic: 'Internal Security', Date: '2012-12-11', Words: 911 }, { Speaker: 'Alexander Abel', Topic: 'Education Policy', Date: '2012-10-30', Words: 5310 }];


// Politican with the most speeches in 2013
const mostSpeechesYear = (data) => {
  const rxDatePattern = /(2012-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  const arrYear = data.filter(el => {
    return rxDatePattern.test(el.Date) ? el.Date : null
  }); // Array with objects that the year have

  const arrSpeakers = arrYear.map(el => { // ['speaker1', 'speaker2', 'speaker3', 'speaker4']
    return el.Speaker;
  });
  
  const countsObj = arrSpeakers.reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr] += 1;
    } else {
      prev[curr] = 1;
    };
    return prev
  }, {}); 
  // { 'Bernhard Belling': 1, 'Caesare Collins': 1, 'Alexander Abel': 2 }

  const arrSpeakerSpeeches = Object.values(countsObj); // [ 2, 1, 1 ]
  
  const values = arrSpeakerSpeeches;
  const maxValue = Math.max(...values); // 2
  const maxValueIndex = arrSpeakerSpeeches.indexOf(maxValue);
  const result = arrSpeakers[maxValueIndex];

  return arrYear.length ? result : null;
};

// console.log(mostSpeechesYear(csv));

module.exports = {
  mostSpeechesYear
}