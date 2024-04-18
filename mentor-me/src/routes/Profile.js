import Navbar from "../components/Navbar";
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Profile (){
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');


    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <>
            <Navbar/>
            <h2 style={{marginTop: "250px"}}>Your Profile</h2>
            <h3>User: {user && user.email}</h3>
            <h3 style={{margin: "10px"}}>Location: </h3>
            <h3 style={{margin: "10px"}}>Biography: </h3>
            {token && <button onClick={handleLogout} style={{marginTop: "15px"}}>Logout</button>}
        </>
    )

}

export default Profile;