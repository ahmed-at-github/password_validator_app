import { useState } from "react";
import validator from "validator";


export default function PassValidComp() {
    //STATE Logic
    const [errorMsg, setErrorMsg] = useState("");
    const [style, setStyle] = useState("danger");


    //EVENT Handler 
    const validate = (pass) => {
        if (validator.isStrongPassword(pass, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMsg("Is Strong Password")
            setStyle("success")
        }
        else {
            setErrorMsg("Is not Strong Password")
            setStyle("danger")
        }
        console.log(style);

    }

    return (
        <>
            <div>
                <div className="bg-muted flex column p-4"  >
                    <h2 className="larger">Password Strength</h2>
                    <pre className="" style={{textAlign: "center"}}>
                        <span >Enter Password:</span> <input className="bd-default" type="text" onChange={(e) => validate(e.target.value)} />
                    </pre>

                    {errorMsg === "" ? null : (<p className={style} style={{fontWeight: "bolder"}} >{errorMsg}</p>)}

                    
                </div>
            </div>
        </>
    )
}
