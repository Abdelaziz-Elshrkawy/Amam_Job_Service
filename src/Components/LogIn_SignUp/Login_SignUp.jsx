import { useEffect, useState } from 'react';

import './LogIn_Sign_Up.css'
import LogIn from '../LogIn/LogIn.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import LottieBot from '../General/Lottie/LottieBot.jsx';

function Login_SignUp() {
    const [pageState, setPageState] = useState(true);
    useEffect(() => {
        console.log(pageState);
    }, [pageState]);
    return (
        <div>
            {pageState ? (
                <LogIn setPageState={setPageState} pageState={pageState} />
            ) : (
                <SignUp setPageState={setPageState} pageState={pageState} />
            )}
            <LottieBot />
        </div>
    );
}

export default Login_SignUp;
