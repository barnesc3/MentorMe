import styles from "./styles.module.css";

const Table = ({ users }) => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.email_tab}>Email</p>
				<p className={styles.location_tab}>Location</p>
				<p className={styles.biography_tab}>Biography</p>
			</div>
			{users.map((user) => (
				<div className={styles.user} key={user.email}>
					<div className={styles.email_container}>
						<p className={styles.user_email}>
							{user.email}
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
				</div>
			))}
		</div>
	);
};

export default Table;