import styles from './App.module.sass';
import Header from './components/Header';
import Footer from './components/Footer';
import Scoreboard from './components/Scoreboard';
import CardScreen from './components/CardScreen';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Scoreboard />
      <CardScreen />
      <Footer />
    </div>
  );
}

export default App;
