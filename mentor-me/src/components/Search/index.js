import styles from "./styles.module.css";

const SearchBar2 = ({ setSearch }) => {
    return(
        <input input
          type="text"
          className={styles.search}
          placeholder="Search Location or Interest Keywords"
          onChange={({ currentTarget: input })=> setSearch(input.value)}
        />
    )
};

export default SearchBar2;