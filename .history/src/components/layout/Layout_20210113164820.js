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
        width: '100%',
        height: '30vh',
        justifyContent: 'center'
    },
    events: {
        backgroundColor: 'blue',
        width: '100%',
        height: '35vh'
    },
    widget_player: {
        backgroundColor: 'green',
        width: '100%',
        height: '33vh'
    },
    widgets: {
        backgroundColor: 'orange',
        height: '70%',
        marginLeft: '5%'
    },
    player: {
        backgroundColor: 'brown',
        height: '30%'
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