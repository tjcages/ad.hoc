import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        maxWidth: '100vw',
        maxHeight: '100vh'
    },
    greeting: {
        backgroundColor: 'red',
        height: '30vh',
        justifyContent: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    events: {
        backgroundColor: 'blue',
        height: '35vh',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    widget_player: {
        backgroundColor: 'green',
        height: '33vh',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    widgets: {
        backgroundColor: 'orange',
        height: '70%',
    },
    player: {
        backgroundColor: 'brown',
        height: '30%',
        paddingLeft: '5%',
        paddingRight: '5%',
    }
})

export default function Layout() {
    return (
        <body className={css(styles.body)}>
            <section className={css(styles.greeting)}>
                Hwllo fuckface its me again
            </section>
            <section className={css(styles.events)}>
                Hwllo fuckface its me again
            </section>
            <section className={css(styles.widget_player)}>
                <div className={css(styles.widgets)}>
                    Toolshack!
                </div>
                <div className={css(styles.player)}>
                    Hungrey!
                </div>
            </section>
        </body>
    )
}