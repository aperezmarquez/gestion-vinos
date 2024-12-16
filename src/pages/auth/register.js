import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";

const Register = () => {
    const [user, setUser] = useState({});
    
    return (
        <>
            <Navbar></Navbar>
            <div>Register</div>
        </>
    );
}

export default Register;
