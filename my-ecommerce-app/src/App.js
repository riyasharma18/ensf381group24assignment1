import logo from './logo.svg';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import Loginpage from './component/Loginpage';
import './App.css';

function App() {
  return (
    <div>
      <Homepage />
      <Productpage />
      <Loginpage />
    </div>
  );
}

export default App;
