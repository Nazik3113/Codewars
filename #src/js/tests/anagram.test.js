const {anagram} = require('../modules/anagram');

describe('Anagram function', () => {

    test('Should be defined', () => {
        expect(anagram()).toBeDefined();
    })

    test('Should return null if there is no data or data is not a string or an empty string', () => {
        expect(anagram()).toBe(null);
        expect(anagram('', '')).toBe(null);
        expect(anagram('', null)).toBe(null);
        expect(anagram( null ,'')).toBe(null);
        expect(anagram( null ,null)).toBe(null);
        expect(anagram( 5 ,5)).toBe(null);
    })

    test('Should return false if the words is not an anagram', () => {
        expect(anagram('one', 'two')).toBe(false);
        expect(anagram('thing', 'thing')).toBe(false);
    })

    test('Should return true if the words is an anagram', () => {
        expect(anagram('thing', 'night')).toBe(true);
        expect(anagram('eleven plus two', 'twelve plus one')).toBe(true);
    })
})