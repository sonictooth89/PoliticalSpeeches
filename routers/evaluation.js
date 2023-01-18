const express = require('express');
const { writeFile, readFile} = require('fs/promises');
const {merge} = require('csv-merger');
const csv = require('csvtojson');
const { mostSpeechesYear } = require('../utils/methodMostSpeechesYear');
const { mostTopicSecurity } = require('../utils/methodMostTopicSecurity');
const { leastTotalWordy } = require('../utils/methodFewestWords');

const evaluationRouter = express.Router();

evaluationRouter
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

        for (const url of urls){
            
            (async () => {
                 const dataFile = await readFile(
                    `./utils/csv/${url}.csv`,
                    'utf-8',
                    (err, data) => {
                        if (err === null) {
                            return data;
                        };
                    }
                );
                 await writeFile(`./utils/csv/download/${url}.csv`, dataFile,  (data, err) => {
                    if (err === null){
                        return data;
                    } else {
                        console.log(err)
                    }
                })
            })();
            
              
            
        };
    

        (async() => {
            let inputFiles = [];
            for (let url of urls){
                await inputFiles.push(`./utils/csv/${url}.csv`);
            }
            const completeData = await merge(inputFiles, options = {
                outputPath: './utils/csv/mergeFile/mergeFile.csv',
                writeOutput: true,
            });
            console.log(completeData);
        })();
        
            const csvFilePath = './utils/csv/mergeFile/mergeFile.csv';
                csv()
                    .fromFile(csvFilePath)
                    .then((jsonObj) => {
                        
                        const obj = (jsonObj);
                        return res.json({
                            mostSpeeches: mostSpeechesYear(obj),
                            mostSecurity: mostTopicSecurity(obj),
                            leastWordy: leastTotalWordy(obj),
                        })        
                        });
                        console.log('Program has finished!')

    
    });

        


// console.log(csvData)

module.exports = {
    evaluationRouter,
}