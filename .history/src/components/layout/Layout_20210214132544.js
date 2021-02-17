import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import Greeting from '../greeting/Greeting'
import Events from '../events/Events'
import Block from '../block/Block'

var gapi

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.auth = props.auth

        this.initClient()
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

    render() {
        return (
            <body className="glass">
                <section className={css(styles.greeting)}>
                    <Greeting />
                </section>
                <section>
                    <button onClick={this.auth.login}>Click for calendar</button>
                    {this.auth.$user && <h1>Tool bag!!!!!</h1>}
                </section>
                <section className={css(styles.events)}>
                    <Events />
                </section>
                <section className={css(styles.block)}>
                    <Block />
                </section>
            </body>
        )
    }
}

const styles = StyleSheet.create({
    greeting: {
        justifyContent: 'space-between',
        paddingTop: '32px',
        paddingLeft: '5%',
        paddingRight: '5%',
        display: 'flex',
    },
    events: {
        paddingTop: '16px',
        display: 'flex',
        width: '100vw'
    },
    block: {
        backgroundColor: '#f7f7f7',
        marginTop: '32px',
        paddingTop: '32px',
        height: '95vh'
    },
})