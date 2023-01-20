// Politican with the most speeches on the topic "Internal Security"
const mostTopicSecurity = (data) => {
  const speechTopic = "Internal Security";

  const arrOneTopic = data.filter((el) => el.Topic === speechTopic);

  const arrSpeakers = arrOneTopic.map((el) => {
    // ['speaker1', 'speaker2']
    return el.Speaker;
  });

  const countsObj = arrSpeakers.reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr] += 1;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});
  // {'speaker1' : number1, 'speaker2' = number2}

  const values = Object.values(countsObj); // table of values
  const maxValue = Math.max(...values); // max value
  const maxValueIndex = values.indexOf(maxValue);

  const result = arrSpeakers[maxValueIndex];

  // console.log(countsObj);
  return arrOneTopic.length ? result : null;
};


module.exports = {
  mostTopicSecurity
}