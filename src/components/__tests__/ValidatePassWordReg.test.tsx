import validatorPassword, {
    LESS_THAN_8_CHARACTERS,
    SHOULD_INCLUDE_ONE_NUMBER_AND_TWO_SPECIAL_CHARACTERS,
    VALIDATE_PASSWORD_REG
} from "../ValidatePassWordReg";

describe('VALIDATE_PASSWORD_REG is good', () => {

    test('less than 8 characters will fail', () => {
        expect(VALIDATE_PASSWORD_REG.test('123')).toBe(false)
    })

    test('all numbers will fail', () => {
        expect(VALIDATE_PASSWORD_REG.test('123123123123')).toBe(false)
    })

    test('greater than 8 but haven\`t include  special characters will fail', () => {
        expect(VALIDATE_PASSWORD_REG.test('abcabc23123')).toBe(false)
    })
    test('greater than 8 including 2 special characters and number', () => {
        expect(VALIDATE_PASSWORD_REG.test('abc123123__')).toBe(true)
    })
})


describe('validatorPassword is good', () => {

    test('will return success:false with message:LESS_THAN_8_CHARACTERS when less than 8 characters will fail', () => {
        expect(validatorPassword('123')).toStrictEqual({
            success: false,
            message: LESS_THAN_8_CHARACTERS
        })
    })

    test('will return success:false with message:SHOULD_INCLUDE_ONE_NUMBER_AND_TWO_SPECIAL_CHARACTERS when all numbers will fail', () => {
        expect(validatorPassword('123123123123')).toStrictEqual({
            success: false,
            message: SHOULD_INCLUDE_ONE_NUMBER_AND_TWO_SPECIAL_CHARACTERS
        })
    })

    test('will return success:false with message:SHOULD_INCLUDE_ONE_NUMBER_AND_TWO_SPECIAL_CHARACTERS when greater than 8 but haven\`t include  special characters will fail', () => {
        expect(validatorPassword('abcabc23123')).toStrictEqual({
            success: false,
            message: SHOULD_INCLUDE_ONE_NUMBER_AND_TWO_SPECIAL_CHARACTERS
        })
    })
    test('will return success:true  when greater than 8 including 2 special characters and number', () => {
        expect(validatorPassword('abc123123__').success).toBe(true)
    })

    test('will return success:true when greater than 15', () => {
        expect(validatorPassword('123123123123123123123').success).toBe(true)
    })
})