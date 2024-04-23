import styles from "./styles.module.css";

const ProfilePage = ({ users }) => {
	return (
		<div className={styles.container}>
            <h1 style={{marginTop: "150px"}}>Your Profile</h1>
			<div className={styles.heading}>
				<p className={styles.name_tab}>Name</p>
				<p className={styles.location_tab}>Location</p>
				<p className={styles.biography_tab}>Biography</p>
                <p className={styles.email_tab}>Email</p>
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
                    <div className={styles.email_container}>
						<p className={styles.user_email}>{user.email}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProfilePage;