import styles from './App.module.sass';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
