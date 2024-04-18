import Description from "../components/Description";
import Navbar from "../components/Navbar";
import PageTemplate from "../components/PageTemplate";
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function About (){
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
                cName="template-mid"
                bgImg = "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="What We Do"
                text="Searching And Matching Based On Your Needs"
            />
            <Description/>
            {token && <button onClick={handleLogout}>Logout</button>}
        </>
    )

}

export default About;