import Password from "../../components/Password";
import {Button} from "@mui/material";
import React, {useState} from "react";


const ResetPassword = () => {
    const [canReset, setCanReset] = useState<boolean>(false);
    return (
        <div>
            <Password onValidate={({success}) => {
                setCanReset(success)
            }}/>
            <Button
                type="button"
                color="primary"
                disabled={!canReset}
                data-testid="reset-btn"
            >Reset Your Password</Button>
        </div>
    )
}

export default ResetPassword