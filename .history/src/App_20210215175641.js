import './App.css'

import Layout from './components/layout/Layout'
import AuthService from './backend/AuthService';

function App() {
  return (
    <div>
      <Layout />
      <AuthService />
    </div>
  );
}

export default App;
