# next-dt-log
> Datetime log for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-dt-log
```

## apis
| api      | params | description                  |
| -------- | ------ | ---------------------------- |
| date     | msgs   | Print `date` prefix log.     |
| time     | msgs   | Print `time` prefix log.     |
| datetime | msgs   | Print `datetime` prefix log. |

## usage
```js
import NxDtLog from '@jswork/next-dt-log';

const logger = new NxDtLog();

logger.time('i will print current time');
logger.date('i will print', 'current', 'date');
logger.datetime('i will','print current datetime');

// [16:13:02] i will print current time
// [2020-11-13] i will print current date
// [2020-11-13 16:13:02] i will print current datetime
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-dt-log/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-dt-log
[version-url]: https://npmjs.org/package/@jswork/next-dt-log

[license-image]: https://img.shields.io/npm/l/@jswork/next-dt-log
[license-url]: https://github.com/afeiship/next-dt-log/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-dt-log
[size-url]: https://github.com/afeiship/next-dt-log/blob/master/dist/next-dt-log.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-dt-log
[download-url]: https://www.npmjs.com/package/@jswork/next-dt-log
