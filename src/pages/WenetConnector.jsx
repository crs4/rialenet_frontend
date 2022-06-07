import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Button, Form, FormGroup, Label, Input, FormText, Card, CardHeader, CardBody,
    CardText, CardTitle, CardFooter
} from 'reactstrap';


//https://www.npmjs.com/package/compress-json
const WenetConnector = () => {


    const [passcode, setPasscode] = useState(null);

    useEffect(()=>{
         localStorage.setItem("passcode", passcode);
      }, [passcode])

    const checkPassCode = (passCodeOrig) => {

        //WQBLLIZQ
        const charset = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
        const passCodeLen = 8
        try {
            const passCode = passCodeOrig.trim().toUpperCase();
            if (passCode.length != passCodeLen) throw ("Invalid");
            let passCodeSum = 0;
            for (let i = 0; i < passCode.length - 1; i++) {
                //console.log("Indice carattere:",charset.indexOf(passCode.charAt(i)))
                passCodeSum += charset.indexOf(passCode.charAt(i))
            }

            passCodeSum -= charset.indexOf(passCode.charAt(passCodeLen - 1))
            //console.log(`PasscodeSum check:${passCodeSum}`)
            const isValid = (passCodeSum % charset.length) == 0
            setPasscode( isValid ? passCode : null);
        } catch (error) {
            setPasscode(null);
        }

    }

    const onEnterPasscode = (ev) => {
        console.log("entered:", ev.target.value)
        checkPassCode(ev.target.value);
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <Card className="mb-4" style={{ borderColor: "#007bff" }}>
                <CardHeader style={{
                    backgroundColor: "#007bff",
                    borderColor: "#007bff",
                    paddingBottom: 0,
                    color: 'white'

                }}>
                    <CardTitle style={{ textAlign: "center" }}>Riale Wenet Platform</CardTitle>
                </CardHeader>
                <CardBody>


                    <Input onChange={(ev) => onEnterPasscode(ev)} type="text" name="passcode" 
                    id="passcode" placeholder="enter a passcode" />

                </CardBody>
                    <CardFooter style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                    {
                        passcode && (
                            <a href={`/connect?passcode=${passcode}`}>Connect to WeNet</a>
                        )
                    }
                        
                    </CardFooter>

            </Card>


        </div>
    );
}

export default WenetConnector