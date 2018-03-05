const { Transform } = require('stream');
const hydrate = require('./hydrate');
const fs = require('fs');
const ora = require('ora');
const split = require('split2');//Normalize line not trunked chunk
const through2 = require('through2');
const spinner = ora('In progress...').start();

const source = fs.createReadStream('./data/data_short.csv');

// const lineToObject = () => new Transform({
//     transform(line, enc, callback){
//         const row = line.toString().split(',');
//         const collision = hydrate(row);
//         spinner.text = JSON.stringify(collision);
//         callback(null,'');
//         // callback(null,JSON.stringify(collision));
//     }
// });

const lineToObject = () => through2.obj(
    
    (line, enc, callback) => {
        const row = line.toString().split(',');
        const collision = hydrate(row);
        callback(null,collision);
        // callback(null,JSON.stringify(collision));
    }
);

const weekdays = [0, 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const collisionByWeekday = () => through2.obj (
    function (collision, enc, cb){
        const wd = collision.collisionDay;
        const wdName = weekdays[wd];
        if(!wdName){
            return cb();
        }

        if(!this.byDay){
            this.byDay = {}
        }

        const collisionOnAWeekday = this.byDay[wdName] || 0;

        this.byDay[wdName] = collisionOnAWeekday + 1;
        spinner.text = JSON.stringify(collision);

        return cb()
    }, function (callback) {
        this.push(this.byDay);
        return cb();
    }
);

source
    .pipe(split())
    .pipe(lineToObject())
    .pipe(collisionByWeekday())
    .pipe(process.stdout);