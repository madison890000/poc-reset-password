export const VALIDATE_PASSWORD_REG = /^(?=.*\d)(?=(.*[!@#$%^&*()_+={}[\]:;"'<>,.?\/|\\~`-]){2}).{8,}$/;

export const LESS_THAN_8_CHARACTERS = 'password are at least 8 characters!';
export const SHOULD_INCLUDE_ONE_NUMBER_AND_TWO_SPECIAL_CHARACTERS = 'password should include one number and two special characters!';
const validatorPassword = (inputValue: string) => {
    if (inputValue.length < 8) {
        return {
            success: false,
            message: LESS_THAN_8_CHARACTERS
        }
    } else if (inputValue.length >= 8 && inputValue.length <= 15) {
        const pass = VALIDATE_PASSWORD_REG.test(inputValue);
        return {
            success: pass,
            message: pass ? '' : SHOULD_INCLUDE_ONE_NUMBER_AND_TWO_SPECIAL_CHARACTERS
        }
    } else {
        return {
            success: true,
        }
    }
}
export default validatorPassword