import {auth, provider} from '../../config/firebase-configuration';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

export const Auth = () => {
    // User Authentication 
    const nav = useNavigate(); 

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        const authInfo = {
            userID: result.user.uid,
            name: result.user.displayName,
            profilePhoto: result.user.photoURL,
            isAuth: true
        };
        localStorage.setItem("auth", JSON.stringify(authInfo))
        nav("/expenses");
        const name = result.user.displayName;
    };
    
    return ( 
    
    <body class="login">
    <div className="login-page">
        <p>Login In with Google</p>
        <button className="google-button" onClick={signInWithGoogle}>Login</button>
    </div>
    </body>
     )
}