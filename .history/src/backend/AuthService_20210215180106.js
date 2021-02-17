import React from 'react';

function AuthService() {
    var gapi = window.gapi
    var CLIENT_ID = "699620956557-821i2pm3rfan358gd1cl0psts5cg2d36.apps.googleusercontent.com"
    var API_KEY = "AIzaSyDZWk1hLDGfLrWwcBDBj0ezXXu9Qzdw_SY"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar"

    var calendarItems = []

    const login = () => {
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3')

            gapi.auth2.getAuthInstance().signIn()
            .then(() => {
                console.log('User Logged in')
            })
            .catch(err => console.log(err))
        })
    }

    async function getCalendar() {
        const events = await gapi.client.calendar.events.list({
            calendarId: 'primary',
            timeMin: new Date().toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 10,
            orderBy: 'startTime'
        })

        console.log(events)

        calendarItems = events.result.items;
    }

    async function insertEvent() {
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

    return (
        <div>
            <button
                onClick={login}
            >
            login
            </button>

            <button
                onClick={getCalendar}
            >
            check-events
            </button>

            <button
                onClick={insertEvent}
            >
            add-event
            </button>

            {calendarItems}
        </div>
    )
}

const hoursFromNow = (n) => new Date(Date.now() + n * 1000 * 60 * 60).toISOString();

export default AuthService