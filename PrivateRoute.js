import { Navigate } from "react-router-dom"
import { islogin } from "../utils"

function PrivateRoute({children}){

    

    return(
        <>
        {islogin()? children:<Navigate to='/login' />}
        </>
    )
}

export default PrivateRoute