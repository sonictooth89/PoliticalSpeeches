const express = require("express");
const { merge } = require("csv-merger");
const csv = require("csvtojson");
const download = require("download");

const { mostSpeechesYear } = require("../utils/methodMostSpeechesYear");
const { mostTopicSecurity } = require("../utils/methodMostTopicSecurity");
const { leastTotalWordy } = require("../utils/methodFewestWords");

const evaluationRouter2 = express.Router();

evaluationRouter2.get("/", (req, res) => {
  if (!req.query.url) {
    return res.json({
      mostSpeeches: null,
      mostSecurity: null,
      leastWordy: null,
    });
  }
  // [ url1, url2, url3 ]
  (async () => {
    const urls = Array.isArray(req.query.url)
      ? req.query.url.map((url) => String(url))
      : [String(req.query.url)];

    await Promise.all(
      urls.map((url) =>
        download(url, `../utils/csv/download/${url.split("/").pop()}`)
      )
    );

    console.log("CSV files have downloaded");

    let inputFiles = [];
    for (let url of urls) {
      inputFiles.push(url);
    }

    const completeData = await merge(
      inputFiles,
      (options = {
        outputPath: "./utils/csv/mergeFile.csv",
        writeOutput: true,
      })
    );
    console.log(completeData);

    const csvFilePath = "./utils/csv/mergeFile.csv";
    await csv()
      .fromFile(csvFilePath)
      .then((jsonObj) => {
        const obj = jsonObj;
        console.log(jsonObj);
        return res.json({
          mostSpeeches: mostSpeechesYear(obj),
          mostSecurity: mostTopicSecurity(obj),
          leastWordy: leastTotalWordy(obj),
        });
      });
  })();

  console.log("Program has finished!");
});

// console.log(csvData)

module.exports = {
  evaluationRouter2,
};
