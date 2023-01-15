const express = require('express');
const { readFile } = require('fs');

const speech1Router = express.Router();
speech1Router
    .get('/', (req, res) => {
        readFile('./utils/csv/speech1.csv', 'utf8', (err, data) => {
            if(err === null){
                res.cookie('file1', data);
                res.send(data);
            } else (
                console.log(err)
            )
        })
        console.log('Program has finished!')
        
    });

    const speech2Router = express.Router();
    speech2Router
        .get('/', (req, res) => {
            readFile('./utils/csv/speech2.csv', 'utf8', (err, data) => {
                if(err === null){
                    res.send(data)
                } else (
                    console.log(err)
                )
            })
            console.log('Program has finished!')
            
        });

        const speech3Router = express.Router();
        speech3Router
            .get('/', (req, res) => {
                readFile('./utils/csv/speech3.csv', 'utf8', (err, data) => {
                    if(err === null){
                        res.send(data)
                    } else (
                        console.log(err)
                    )
                })
                console.log('Program has finished!')
                
            });        


module.exports = {
    speech1Router,
    speech2Router,
    speech3Router
}