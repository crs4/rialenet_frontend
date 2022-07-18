import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import {
    Button, Form, FormGroup, Label, Input, FormText, Card, CardHeader, CardBody,
    CardText, CardTitle, CardFooter
} from 'reactstrap';

import { LanguageSelector } from '../components/UtilsComponents';
import { useParams, useLocation , Link } from 'react-router-dom'

//https://www.npmjs.com/package/compress-json
const WenetConnector = (props) => {
    
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    //let {mypasscode} = useParams();
    const [passcode, setPasscode] = useState(null);
    const mypasscode = useRef(null);
    const location = useLocation();
    

    const getDefaultValue = ()=>{
        if (location!=null && location.search!=null)
        {
            const query = new URLSearchParams(location.search);
            if (query!=null)
            {
                const mypasscode = query.get("mypasscode")
                return mypasscode
            }
            
        }
        return ""
     }
     
     useEffect(()=>{
         if (location!=null)
         {
            mypasscode.current = getDefaultValue() 
            if (mypasscode.current!=null)
            {
                console.log("Login location current:",mypasscode.current );
                checkPassCode(mypasscode.current);
            }
            
         }
        
     }, [location])

    useEffect(()=>{
         localStorage.setItem("passcode", passcode);  
         //console.log("Login input text visibile:", (!(mypasscode.current!=null && mypasscode.current.length>0 && mypasscode.current==passcode)));
      }, [passcode])

  

    const checkPassCode = (passCodeOrig) => {
    

        //WQBLLIZQ
        const charset = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
        const passCodeLen = 8
        try {
            const passCode = passCodeOrig.trim().toUpperCase();
            if (passCode.length != passCodeLen) throw (`Invalid passcode len:${passCode.length}`);
            let passCodeSum = 0;
            for (let i = 0; i < passCode.length - 1; i++) {
                //console.log("Indice carattere:",charset.indexOf(passCode.charAt(i)))
                passCodeSum += charset.indexOf(passCode.charAt(i))
            }

            passCodeSum -= charset.indexOf(passCode.charAt(passCodeLen - 1))
            //console.log(`PasscodeSum check:${passCodeSum}`)
            const isValid = (passCodeSum % charset.length) == 0
            setPasscode( isValid ? passCode : null);
            console.log("Login Set passcode to:", passCode);
        } catch (error) {
            console.log("Login location error?", error);
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
                    <CardTitle style={{ textAlign: "center" }}>{t("platform_title")}</CardTitle>
                    <LanguageSelector/>
                </CardHeader>
                <CardBody>


                   {
                   <Input onChange={(ev) => onEnterPasscode(ev)} type="text" name="passcode" 
                    defaultValue={passcode}
                    id="passcode" placeholder={t("passcode_enter")} />}

                </CardBody>
                    <CardFooter style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                    {
                        passcode && (
                            <a href={`/connect?passcode=${passcode}`}>{t("connect_to_wenet")}</a>
                        )
                    }
                        
                    </CardFooter>

            </Card>


        </div>
    );
}

export default WenetConnector