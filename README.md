# before-today

Returns the current date or a date prior (offset in days) to the current date as
a JavaScript Date.

## Install

```
npm install --save before-today
```

## Usage

```
const date = require('before-today');

date();
// today's date (eg. 2017-05-04T13:42:53.050Z)

date(3);
//Three days ago (eg. 2017-05-01T13:42:53.052Z)
```

## Related
[start-date](https://github.com/RyanDavison/start-date)

## License

MIT
