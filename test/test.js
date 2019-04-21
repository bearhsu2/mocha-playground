var assert = require('assert');
var TennisGame = require('../TennisGame.js');

describe('Tennis', function () {

    it('When init then 0 : 0', function () {
        let game = new TennisGame();
        assert.equal(game.getScore(), "0 : 0");
    });

    it('When a then  15 : 0', function () {
        let game = new TennisGame();
        game.a();
        assert.equal(game.getScore(), "15 : 0");
    });


});