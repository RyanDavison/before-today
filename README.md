# before-today

Returns the current date or a date prior (offset in days) to the current date as
a JavaScript Date.

before-today takes a boolean value as an optional second argument. Setting the
value to true will return a number in milliseconds.

Dates are calculated with hours set to 0.

## Install

```
npm install --save before-today
```

## Usage

```
const date = require('before-today');

date();
// today's date (eg. 2017-05-08T06:00:00.000Z)

date(3);
//Three days ago (eg. 2017-05-05T06:00:00.000Z)

date(0, true);
// today's date (eg. 1494223200000)

date(3, true);
//Three days ago (eg. 1493964000000)
```

## Related
[start-date](https://github.com/RyanDavison/start-date)

## License

MIT
