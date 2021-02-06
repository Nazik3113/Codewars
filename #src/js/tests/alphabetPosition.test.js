const {alphabetPosition} = require('../modules/alphabetPosition');

describe('Alphabet position', () => {
    const testString = "The sunset sets at twelve o' clock.";

    test('Should be defined', () => {
        expect(alphabetPosition()).toBeDefined();
    })

    test('Should return alphabet positions of text', () => {
        const resString = '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11';
        expect(alphabetPosition(testString)).toEqual(resString);
        expect(alphabetPosition("i#05i@ey")).toEqual('9 9 5 25');
    })

    test('Should return null', () => {
        expect(alphabetPosition('')).toBe(null);
        expect(alphabetPosition()).toBe(null);
    })

    test('Should not contain numbers less or equal 0 and more than 26', () => {
        expect(alphabetPosition(testString)).not.toContain(' 0 ');
        expect(alphabetPosition(testString)).not.toContain('27');
    })

})