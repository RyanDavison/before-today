module.exports = days => require('moment')().subtract(days || 0, 'days').toDate()
