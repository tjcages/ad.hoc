import { useSelector } from 'react-redux'
import { selectSignedIn } from './backend/UserSlice'
import './styling/app.css'

import Homepage from './components/layout/Homepage'
import Layout from './components/layout/Layout'

function App() {
  const isSignedIn = useSelector(selectSignedIn)

  return (
    <div className="glass">
      {isSignedIn ? <Layout /> : <Homepage />}
    </div>
  );
}

export default App;
