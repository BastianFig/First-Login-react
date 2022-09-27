
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Juera = () => {
    const {logout} = useAuth0();
    return(
        <button onClick={() => logout()}>
            juera
        </button>
    )
}
export default Juera;