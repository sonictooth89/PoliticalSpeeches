const csv = [ { Speaker: 'Bernhard Belling', Topic: 'Coal Subsidies', Date: '2012-11-05', Words: 1210 }, { Speaker: 'Caesare Collins', Topic: 'Internal Security', Date: '2012-11-06', Words: 1119 }, { Speaker: 'Alexander Abel', Topic: 'Coal Subsidies', Date: '2012-12-11', Words: 911 }, { Speaker: 'Alexander Abel', Topic: 'Education Policy', Date: '2012-10-30', Words: 5310 }];

// Politican with the most speeches on the topic "Internal security"
const mostTopicSecurity = (data) => {
  const speechTopic = 'Internal Security';
  const arrOneTopic = data.filter(el => el.Topic === speechTopic);
  const arrSpeakers = arrOneTopic.map(el => {
    return el.Speaker;
  });

  const countsObj = arrSpeakers.reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr] += 1;
    } else {
      prev[curr] = 0;
    }
    return prev
  }, {});

  const values = Object.values(countsObj);
  const maxValue = Math.max(...values); // 2
  const maxValueIndex = values.indexOf(maxValue);
  
  const result = arrSpeakers[maxValueIndex];

  return arrOneTopic.length ? result : null;
};

console.log(mostTopicSecurity(csv));


module.exports = {
  mostTopicSecurity
}