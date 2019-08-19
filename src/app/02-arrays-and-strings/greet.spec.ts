import { greet } from "./greet";

// testing a string
describe('greet', () => {
    it('should include the name in the message', () => {
       expect(greet('roman')).toContain('roman');
    });
})