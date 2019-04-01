const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
var lodash = require('lodash.chunk');
var join = require('lodash.join');
var map = require('lodash.map');
const chalk = require('chalk');

const range = moment.range(2019-1-1, 2019-12-31);
console.log(chalk.red(moment.months()));
//_ .join(['a', 'b', 'c'], '~');

for (let month of range.by('month')) {
    month.format('YYYY-MM-DD');
  }

const start = moment("2017-01-01T13:30:00");
const end = moment("2017-12-31T01:45:12");
const r1 = moment.range(start, end);
const r2 = r1.snapTo('day');

console.log(Array.from(r1.by('days')).map(m => m.format('DD')));
console.log(Array.from(r2.by('days')).map(m => m.format('DD')));

