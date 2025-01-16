import styles from "./App.module.css";
import { Hero } from "./components/Yo/Yo";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
