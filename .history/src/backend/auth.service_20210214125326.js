import firebase from "firebase/app";

var gapi

export class AuthService {
  constructor(afAuth) {
    this.afAuth = afAuth;
    this.user$ = afAuth.authState;
    this.calendarItems = [];

    this.login = this.login.bind(this)
    
    this.initClient();
   }

   // Initialize the Google API client with desired scopes
   initClient() {
    gapi.load('client', ()=> {
      console.log('loaded client');

      // It's ok to expose these credentials, they are client safe.
      gapi.client.init({
        apiKey: 'AIzaSyDZWk1hLDGfLrWwcBDBj0ezXXu9Qzdw_SY',
        clientId: '699620956557-4t10bjibulplenik09qafg25v9k2ir6m.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar'
      })

      gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'));
    });
   }

   async login() {
    console.log('Made it this far')
    const googleAuth = gapi.auth2.getAuthInstance()
    const googleUser = await googleAuth.signIn()

    const token = googleUser.getAuthResponse().id_token;

    console.log(googleUser)

    const credential = firebase.auth.GoogleAuthProvider.credential(token)

    await this.afAuth.signInWithCredential(credential);
   }

   logout() {
     this.afAuth.signOut();
   }

   async getCalendar() {
     const events = await gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: 'startTime'
     })

     console.log(events)

     this.calendarItems = events.result.items;
   }

   async insertEvent() {
    await gapi.client.calendar.events.insert({
      calendarId: 'primary',
      start: {
        dateTime: hoursFromNow(2),
        timeZone: 'America/Los_Angeles'
      },
      end: {
        dateTime: hoursFromNow(3),
        timeZone: 'America/Los_Angeles'
      },
      summary: 'Have fun!!',
      description: 'Do some cool stuff and have a fun time doing it.'
    })

    await this.getCalendar();
   }
}

const hoursFromNow = (n) => new Date(Date.now() + n * 1000 * 60 * 60).toISOString();
