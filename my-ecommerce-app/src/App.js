import logo from './logo.svg';
import Homepage from './components/Homepage';
import ProductsPage from './components/ProductsPage';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
