import Navbar from "../components/Navbar";
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import ProfilePage from '../ProfilePage'
import Table from '../components/Table'

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

    const [obj, setObj] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() =>{
        const getAllUsers = async () => {
            try{
                const url = `http://localhost:8080/api/users?search=${user.email}`;
                const { data } = await axios.get(url );
                setObj(data);
                console.log(data)
            } catch(err) {
                console.log(err)
            }
        };
    
        getAllUsers();
      }, [page]);

    return(
        <>
            <Navbar/>
            <div className="body">
              <div className="table_container">
                <ProfilePage users={obj.users ? obj.users:[]}/>
              </div>
            </div>
            <h2>Your Requests</h2>
            <div className="body">
              <div className="table_container">
                <Table users={user.requests ? user.requests:[]}/>
              </div>
            </div>
            {token && <button onClick={handleLogout} style={{marginTop: "15px"}}>Logout</button>}
        </>
    )

}

export default Profile;