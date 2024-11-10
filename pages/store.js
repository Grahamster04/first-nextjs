import styles from '../styles/Home.module.css';
import SearchBar from '../components/SearchBar.js';



export default function Store() {
    return (
        <>
        <div className = {styles.fakestore}>
            <h1>Fake Store</h1>
            <p>Welcome to the Fake Store!</p>
            <p>Here you'll find a variety of products from the fake store.</p>
            <SearchBar/>
        </div>

        </>
    );
};