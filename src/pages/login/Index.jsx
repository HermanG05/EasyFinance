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
    
    return <div className="login-page">
        <h1 id="login-title">EasyFinance</h1>
        <div className="login-box">
        <p>EasyFinance is an all in one solution to tracking your expenses, investments, and keeping up with personal finance news!</p>
        <button className="google-button" onClick={signInWithGoogle}><span class="text">Login with Google</span></button>
        <button className="google-button1" onClick={signInWithGoogle}><span>Sign-up with Google</span></button>
        </div>
    </div>
}

