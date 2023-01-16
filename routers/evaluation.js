const express = require('express');
const csv = require('csvtojson');
const path = require('path');
const http = require('http');
const parse = require('papaparse');
const { pipeline } = require('fs');
// const { readFile } = require('fs');
const { mostSpeechesYear } = require('../utils/methodMostSpeechesYear');
const { mostTopicSecurity } = require('../utils/methodMostTopicSecurity');
const { leastTotalWordy } = require('../utils/methodFewestWords');
const { createWriteStream } = require('fs');
const { createReadStream } = require('fs');


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

        const urls = Array.isArray(req.query.url)
                ? req.query.url.map(url => String(url)) : [String(req.query.url)];
                // [ url1, url2, url3 ]
        
                for(let url of urls){
                    
                        const csvFilePath = `./utils/csv/${url}.csv`;
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
                            
                    
            };
            console.log('Program has finished!')
        })


// console.log(csvData)

module.exports = {
    evaluationRouter,
}