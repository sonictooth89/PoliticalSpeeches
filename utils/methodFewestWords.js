// Politican with the most speeches on the topic "Internal security"
const leastTotalWordy = (data) => {
  const speakersWords = {};

  data.forEach((el) => {
    speakersWords[el.Speaker]
      ? (speakersWords[el.Speaker] += Number(el.Words))
      : (speakersWords[el.Speaker] = Number(el.Words));
  }); //{'Bernhard Belling': 1210,'Caesare Collins':1119,  'Alexander Abel': 6221}

  const arrSpeakersWords = Object.values(speakersWords); // [1210, 1119, 6221]
  const arrSpeakers = Object.keys(speakersWords); // ['Bernhard Belling', 'Caesare Collins', 'Alexander Abel']

  const minValue = Math.min(...arrSpeakersWords); // 6221
  const minValueIndex = arrSpeakersWords.indexOf(minValue);

  const result = arrSpeakers[minValueIndex];
  return arrSpeakers.length ? result : null;
};

module.exports = {
  leastTotalWordy
}