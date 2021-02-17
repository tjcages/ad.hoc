import Layout from './components/layout/Layout'
import './App.css'
import { AuthService } from './backend/auth.service';
import { render } from 'react-dom';

function App() {
  return (
    <Layout auth={AuthService}/>
  );
}

export default App;
