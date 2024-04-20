import Navbar from "./components/Navbar";
import { signOut } from 'firebase/auth';
import { auth } from './routes/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar2 from "./components/Search";
import Table from "./components/Table";

const base_url = process.env.REACT_APP_API_URL;

function Search (){
    const navigate = useNavigate();
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
  const [search, setSearch] = useState("");

  useEffect(() =>{
    const getAllUsers = async () => {
        try{
            const url = `${base_url}?search=${search}`;
            const { data } = await axios.get(url );
            setObj(data);
            console.log(data)
        } catch(err) {
            console.log(err)
        }
    };

    getAllUsers();
  }, [page, search]);

    return(
        <>
            <>
            <Navbar/>
            <div className="head">
              <SearchBar2 setSearch={(search) => setSearch(search)}/>
            </div>
            <div className="body">
              <div className="table_container">
                <Table users={obj.users ? obj.users:[]}/>
              </div>
            </div>
            {token && <button onClick={handleLogout} style={{margin: "10px"}}>Logout</button>}
        </>
        </>
    )

}

export default Search;