import useStyles from "./styles";
import Card from '@mui/material/Card';
import { Button } from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
        .then(() => {
            navigate('/',{replace:true})
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log({
                errorCode,
                errorMessage,
                email,
                credential
            })
        });
    }


    auth.onAuthStateChanged(() =>{
        console.log(auth.currentUser)
    })

    return(
        <div style={{
            width:'100vw',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Card
                sx={{
                    width:'30%',
                    minWidth:'650px',
                    height:'40%',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-evenly',
                    alignItems:'center',
                }}
            >
                <>
                Bienvenido, {auth.currentUser?.displayName}
                <Button
                    sx={{
                        width:'50%'
                    }}
                    onClick={handleLogin}
                >Login</Button>
                
                </>
            </Card>
        </div>
    )
}

export default Login;