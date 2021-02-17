import './App.css'

import Layout from './components/layout/Layout'
import { AuthService } from './backend/auth.service';

function App() {
  return (
    <Layout auth={AuthService}/>
  );
}

export default App;
