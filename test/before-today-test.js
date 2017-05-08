const chai = require('chai');
const moment = require('moment');
const expect = chai.expect;
const before = require('../index.js');

chai.use(require('chai-datetime'));

describe(`before-today`, function(){
    it(`should return a number if true is passed as the second argument`, function(){
            expect(before(0, true)).to.be.a('number');
        });

    it(`should return an object if true is not passed as the second argument`, function(){
            expect(before(0)).to.be.a('date');
        });

    it(`should return equal dates in miliseconds with time set to zero when an
    offset of 0 days is passed as the first argument and true is passed as the
    second argument`, function(){

            const msd = 1000*60*60*24;
            const offset = 0;
            const date = Date.now();
            const today = new Date(date - offset*msd).setHours(0,0,0,0);
            console.log('no days ago', today)
            expect(before(0, true)).to.equal(today);
        });

    it(`should return equal dates in miliseconds with time set to zero when an
    offset of 3 days is passed as the first argument and true is passed as the
    second argument`, function(){

            const msd = 1000*60*60*24;
            const offset = 3;
            const today = new Date().setHours(0,0,0,0) - offset*msd;
            console.log('3 days ago', today)
            expect(before(3, true)).to.equal(today);
        });

    it(`should return equal dates when no arguments are passed`, function(){

            const msd = 1000*60*60*24;
            const offset = 3;
            const startDay = new Date(new Date().setHours(0,0,0,0) - (offset*msd));
            console.log('date obj 3 days ago',startDay, 'actually today: ', new Date().setHours(0,0,0,0))
            expect(before(offset)).to.equalDate(startDay);
        });


});
