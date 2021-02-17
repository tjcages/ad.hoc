import { useSelector } from 'react-redux'
import { selectSignedIn } from './backend/UserSlice'
import { AuthProvider } from './backend/AuthContext'
import './styling/app.css'

import Homepage from './components/layout/Homepage'
import Layout from './components/layout/Layout'

function App() {
  const isSignedIn = useSelector(selectSignedIn)

  return (
    <div className="glass">
      <AuthProvider>
        {isSignedIn ? <Layout /> : <Homepage />}
      </AuthProvider>
    </div>
  );
}

export default App;
