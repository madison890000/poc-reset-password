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
        <div style={{
            display: 'block'
        }}>
            <h3>
                Reset Password
            </h3>
            <div>
                <input
                    onChange={onChange}
                    data-testid="reset-password"
                    placeholder="Please input your password"
                    style={{
                        width: 200,
                        height: 30,
                    }}
                    type="password"
                />
            </div>
            {
                passTheValidation ? <div>password is fit the rules!</div> : (
                    <div style={{
                        color: 'red',
                        maxWidth: 200,
                    }}>
                        {message}
                    </div>
                )
            }
        </div>
    )
}

export default Password