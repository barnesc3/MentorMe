import Navbar from "../components/Navbar";
import PageTemplate from "../components/PageTemplate";
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Home (){
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

    return(
        <>
            <Navbar/>
            <PageTemplate
                cName="template"
                bgImg = "https://images.unsplash.com/photo-1534030665069-90e016e995e5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Find Your Perfect Mentor"
                text="Match for food, hobbies, location, and more"
            />
            {token && <button onClick={handleLogout}>Logout</button>}
        </>
        
    )

}

export default Home;