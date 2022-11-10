import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import IssuePage from './Components/IssuePage/IssuePage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <IssuePage />
      <Footer />
    </div>
  );
}

export default App;
