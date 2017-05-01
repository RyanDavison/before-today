const chai = require('chai');
const moment = require('moment');
const expect = chai.expect;
const before = require('../index.js');

describe(`before-today`, function(){
    it(`before-today should return today's date when nothing is passed to the
        module`, function(){
            const today = moment().subtract(0, 'days').format("DD-MM-YYYY");
            expect(before()).to.equal(today);
        });

    it(`before-today should return yesterday's date when 1 is passed to the
        module`, function(){
            const yesterday = moment().subtract(1, 'days').format("DD-MM-YYYY");
            expect(before(1)).to.equal(yesterday);
        });

    it(`before-today should return yesterday's date when 5 is passed to the
        module`, function(){
            const fivedays = moment().subtract(5, 'days').format("DD-MM-YYYY");
            expect(before(5)).to.equal(fivedays);
        });
});
