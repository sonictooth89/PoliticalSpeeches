// Politican with the most speeches on the topic "Internal Security"
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
      prev[curr] = 1;
    }
    console.log(prev)
    return prev;
  }, {});

  const values = Object.values(countsObj);
  const maxValue = Math.max(...values); // 2
  const maxValueIndex = values.indexOf(maxValue);

  const result = arrSpeakers[maxValueIndex];

  // console.log(arrSpeakers);
  return arrOneTopic.length ? result : null;
};

// console.log(mostTopicSecurity(csv));

module.exports = {
  mostTopicSecurity
}