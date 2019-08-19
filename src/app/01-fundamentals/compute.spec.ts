import { compute } from './compute';
// UNIT TEST!
//describe() define a suite: a group of related tests
// it() define a test

//we describe the function compute(=the function to be tested) with it to be the name of the test
describe('compute', () => {
    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('should increment the input if it is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });
});
