const chai = require('chai');
const assert = chai.assert;
const cc = require('../src/index');

describe('Card Counting Function', () => {
    it('should increment count for cards 2, 3, 4, 5, 6', () => {
        assert.equal(cc(2), '1 Bet');
        assert.equal(cc(3), '2 Bet');
        assert.equal(cc(4), '3 Bet');
        assert.equal(cc(5), '4 Bet');
        assert.equal(cc(6), '5 Bet');
    });

    it('should decrement count for cards 10, J, Q, K, A', () => {
        assert.equal(cc(10), '-1 Hold');
        assert.equal(cc('J'), '-2 Hold');
        assert.equal(cc('Q'), '-3 Hold');
        assert.equal(cc('K'), '-4 Hold');
        assert.equal(cc('A'), '-5 Hold');
    });
});