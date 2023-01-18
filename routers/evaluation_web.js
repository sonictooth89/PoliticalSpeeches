const express = require('express');
// const {readFile, writeFile} = require('fs');
const {merge} = require('csv-merger');
const csv = require('csvtojson');
const { mostSpeechesYear } = require('../utils/methodMostSpeechesYear');
const { mostTopicSecurity } = require('../utils/methodMostTopicSecurity');
const { leastTotalWordy } = require('../utils/methodFewestWords');

const evaluationRouter = express.Router();

evaluationRouterWeb
    .get('/', (req, res) => {
       
        if(!req.query.url){
            return res.json({
                mostSpeeches: null,
                mostSecurity: null,
                leastWordy: null
            });
        };
        // [ url1, url2, url3 ]


        const urls = Array.isArray(req.query.url)
                ? req.query.url.map(url => String(url)) : [String(req.query.url)];

                (async() => {
                    let inputFiles = [];
                    for (let url of urls){
                        await inputFiles.push(`./utils/csv/${url}.csv`);
                    }
                    const completeData = await merge(inputFiles, options = {
                        outputPath: './utils/csv/mergeFile.csv',
                        writeOutput: true,
                    });
                    console.log(completeData);
                })();
                    
                (async() => {
                    const csvFilePath = './utils/csv/mergeFile.csv';
                        await csv()
                            .fromFile(csvFilePath)
                            .then((jsonObj) => {
                                
                                const obj = (jsonObj);
                                console.log(jsonObj)
                                return res.json({
                                    mostSpeeches: mostSpeechesYear(obj),
                                    mostSecurity: mostTopicSecurity(obj),
                                    leastWordy: leastTotalWordy(obj),
                                })        
                                });
                })();        
                            
            
            console.log('Program has finished!')
        });

        


// console.log(csvData)

module.exports = {
    evaluationRouterWeb,
}