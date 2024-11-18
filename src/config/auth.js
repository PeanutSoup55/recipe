import { useState } from 'react';
import {auth} from './firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './auth.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Nav from '../components/nav';


const Auth = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    console.log(auth?.currentUser?.email);
    const signIn = async (event) => {
        event.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/Sidebar', { replace: true }); // redirect to dashboard after successful login

        }catch (err){
            setError(err.message);
        }
    };

    const logout = async () => {
        try {
          await signOut(auth);
        } catch (err) {
          console.error(err);
        }
      };


    return (
        <div className='idk'>
            <Nav/>
            <div className='auth'>
                <div className='body'>
                    <div className='wrapper'>
    
                        <form action='' onSubmit={signIn}>
                            <h1>Login</h1>
                            {error && <p style={{ color: 'red' }}>{error}</p>}

                            <div className='input-box'>
                                <input type='text' placeholder="email..." onChange={(e) => setEmail(e.target.value)}/>
                                <FaUser className='icon'/>
                            </div>
                            <div className='input-box'>
                                <input type='password' placeholder="password..." onChange={(e) => setPassword(e.target.value)}/> 
                                <FaLock className='icon'/>
                            </div>
                            
                            <button type='submit'>Sign In</button>
                            <button onClick={logout}>Logout</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Auth;