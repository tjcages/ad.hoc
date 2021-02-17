import './App.css'

import Layout from './components/layout/Layout'
import { AuthService } from './backend/auth.service';

function App() {
  var gapi
  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: 'AIzaSyDZWk1hLDGfLrWwcBDBj0ezXXu9Qzdw_SY',
        clientId: '699620956557-4t10bjibulplenik09qafg25v9k2ir6m.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar'
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()


    })
  }

  return (
    // <Layout auth={AuthService}/>
    <button onClick={handleClick}>
      Don't press me I swear
    </button>
  );
}

export default App;
