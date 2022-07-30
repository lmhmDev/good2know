import useStyles from "./styles";
import Card from '@mui/material/Card';
import { Button } from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

const Login = () => {

    const [email,setEmail] = useState<string | null>(null)

    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            setEmail(user?.email)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

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
                Bienvenido {email},
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