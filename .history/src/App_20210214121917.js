import Layout from './components/layout/Layout'
import './App.css'
import { AuthService } from './backend/auth.service';

function App() {
  return (
    <div className="App">
      <Layout auth={AuthService}/>
    </div>
  );
}

export default App;
