import Layout from './components/layout/Layout'
import './App.css'
import { AuthService } from './backend/auth.service';

function App() {
  return (
    <Layout auth={AuthService}/>
  );
}

export default App;
