import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar';
import {NavbarThemeProvider} from './contexts/ThemeContext'
import Card from './componenets/Card';

function App() {
  return (
    <div className="App">
      
      <NavbarThemeProvider>
        <Navbar />
        <Card/>
      </NavbarThemeProvider>

    </div>
  );
}

export default App;
