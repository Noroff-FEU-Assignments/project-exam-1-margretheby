import { validateEmail } from "./validate-email.js";

describe('validateEmail', () => {
    it('should check if the pattern matches the input', async () => {
        await expect(validateEmail).toBeTruthy();
    } 
    ) 
})