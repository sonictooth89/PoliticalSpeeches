const express = require("express");
const { merge } = require("csv-merger");
const csv = require("csvtojson");
const download = require("download");

const { mostSpeechesYear } = require("../utils/methodMostSpeechesYear");
const { mostTopicSecurity } = require("../utils/methodMostTopicSecurity");
const { leastTotalWordy } = require("../utils/methodFewestWords");

const evaluationRouter2 = express.Router();

evaluationRouter2.get("/", (req, res) => {
  // result if no data
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

    // reed urls und download files
    await Promise.all(
      urls.map((url) =>
        download(url, `../utils/csv/download/${url.split("/").pop()}`)
      )
    );

    console.log("CSV files have downloaded");

    // merging many downloaded files in one file
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

    // convert csv to json + evaluete json
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

module.exports = {
  evaluationRouter2,
};
