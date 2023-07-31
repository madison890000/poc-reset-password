import {ChangeEvent, useState} from "react";
import validatorPassword from "./ValidatePassWordReg";

interface IValidateResult {
    success: boolean;
    message?: string;
}

interface PasswordProps {
    validator?: RegExp;
    onValidate?: (result: IValidateResult) => void;
}

enum ValidateStatus {
    INIT = 'INIT',
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
}

const Password = ({onValidate}: PasswordProps) => {
    const [validateStatus, setValidateStatus] = useState<string>(ValidateStatus.INIT);
    const [message, setMessage] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {success, message} = validatorPassword(e?.target?.value);
        setMessage(message ?? '');
        setSuccess(success);
        setValidateStatus(success ? ValidateStatus.SUCCESS : ValidateStatus.FAIL);
        onValidate?.({
            success,
            message
        })
    }
    const passTheValidation = validateStatus != ValidateStatus.INIT && success;
    return (
        <>
            <div>
                Reset Password
            </div>
            <div>
                <input onChange={onChange}/>
            </div>
            {
                passTheValidation ? <div>password is fit the rules!</div> : (
                    <div style={{
                        color: 'red'
                    }}>
                        {message}
                    </div>
                )
            }
        </>
    )
}

export default Password