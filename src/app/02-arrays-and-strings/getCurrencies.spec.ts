import { getCurrencies } from "./getCurrencies";

// UNIT TEST - check if an array contains values
describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
})