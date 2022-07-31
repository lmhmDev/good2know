import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (WrappedComponent:any) => {

    return function Render(props:any){
        const auth = getAuth();
        const navigate = useNavigate();

        useEffect(() => {
            console.log(auth.currentUser)
            if(!auth.currentUser) {
                navigate("/login", {replace:true})
                console.log(auth.currentUser)
            }
        }, [])
        

        return <WrappedComponent {...props} />
    }
}


export default PrivateRoute;