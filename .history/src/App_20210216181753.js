import { useSelector } from 'react-redux'
import { selectSignedIn } from './backend/UserSlice'
import './App.css'

import Homepage from './components/layout/Homepage'
import Layout from './components/layout/Layout'

function App() {
  const isSignedIn = useSelector(selectSignedIn)

  return (
    <body className="glass">
      {isSignedIn ? <Layout /> : <Homepage />}
    </body>
  );
}

export default App;
