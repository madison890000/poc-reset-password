import Password from "../../components/Password";
import {Button} from "@mui/material";
import React, {useState} from "react";
import styles from './index.module.scss'

const ResetPassword = () => {
    const [canReset, setCanReset] = useState<boolean>(false);
    return (
        <div className={styles.container}>
            <div className={styles.passwordContainer}>
                <Password onValidate={({success}) => {
                    setCanReset(success)
                }}/>
            </div>
            <div className={styles.resetButton}>
                <Button
                    type="button"
                    color="primary"
                    disabled={!canReset}
                    data-testid="reset-btn"
                    style={{
                        backgroundColor: canReset ? '#1677ff' : 'gray',
                        color: 'white',
                    }}
                >Reset Your Password</Button>
            </div>
        </div>
    )
}

export default ResetPassword