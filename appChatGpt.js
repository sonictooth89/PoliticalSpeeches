const express = require("express");
const csv = require("csv-parser");
const request = require("request");
const fs = require("fs");

const app = express();

app.get("/evaluation", (req, res) => {
  let speeches = [];
  const urls = req.query.url;

  urls.forEach((url) => {
    request(url)
      .pipe(csv())
      .on("data", (data) => {
        speeches.push(data);
      })
      .on("end", () => {
        const evaluation = evaluateSpeeches(speeches);
        res.json(evaluation);
      });
  });
});

function evaluateSpeeches(speeches) {
  let mostSpeeches = null;
  let mostSecurity = null;
  let leastWordy = null;

  const speechesByPolitician = {};
  const securitySpeechesByPolitician = {};
  const wordCountByPolitician = {};

  speeches.forEach((speech) => {
    const { Speaker, Topic, Date, Words } = speech;

    if (Date.startsWith("2013")) {
      if (!speechesByPolitician[Speaker]) {
        speechesByPolitician[Speaker] = 0;
      }
      speechesByPolitician[Speaker]++;
    }

    if (Topic === "Internal Security") {
      if (!securitySpeechesByPolitician[Speaker]) {
        securitySpeechesByPolitician[Speaker] = 0;
      }
      securitySpeechesByPolitician[Speaker]++;
    }

    if (!wordCountByPolitician[Speaker]) {
      wordCountByPolitician[Speaker] = 0;
    }
    wordCountByPolitician[Speaker] += parseInt(Words);
  });

  mostSpeeches = Object.keys(speechesByPolitician).reduce((a, b) =>
    speechesByPolitician[a] > speechesByPolitician[b] ? a : b
  );
  mostSecurity = Object.keys(securitySpeechesByPolitician).reduce((a, b) =>
    securitySpeechesByPolitician[a] > securitySpeechesByPolitician[b] ? a : b
  );
  leastWordy = Object.keys(wordCountByPolitician).reduce((a, b) =>
    wordCountByPolitician[a] < wordCountByPolitician[b] ? a : b
  );

  return {
    mostSpeeches,
    mostSecurity,
    leastWordy,
  };
}
// zmiana
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
