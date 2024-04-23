import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";

const Table = ({ users }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [biography, setBiography] = useState('');
    const [accountType, setType] = useState('');
    const [location, setLocation] = useState('');
    const [requests, setRequests] = useState([]);
    const matches = useState([]);

    

    const [matchedUser, setMatchedUser] = useState("");

    const handleMatch = async (matchUser) => {
        setName(user.name)
        setEmail(user.email)
        setBiography(user.biography)
        setLocation(user.location)
        setType(user.accountType)
        setRequests(user.requests)
        setMatchedUser(matchUser)
        setRequests(requests.push(matchUser.email))

    }

    axios.post('http://localhost:3001/register', {name, email, password, biography, accountType, location, requests, matches})
      .then(result => console.log(result))
      .catch(err => console.log(err))

	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.name_tab}>Name</p>
				<p className={styles.location_tab}>Location</p>
				<p className={styles.biography_tab}>Biography</p>
                <p className={styles.match_tab}>Match</p>
			</div>
			{users.map((user) => (
				<div className={styles.user} key={user.name}>
					<div className={styles.name_container}>
						<p className={styles.user_name}>
							{user.name}
						</p>
					</div>
					<div className={styles.location_container}>
							<p key={user.location} className={styles.user_location}>
								{user.location}
							</p>
					</div>
					<div className={styles.biography_container}>
						<p className={styles.user_biography}>{user.biography}</p>
					</div>
                    {token && <div className={styles.biography_container}>
						<p className={styles.user_match}>{user.match}</p>
                        <button onClick={handleMatch(user)}>Request</button>
					</div>}
				</div>
			))}
		</div>
	);
};

export default Table;