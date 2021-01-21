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
        width: '100vw',
        height: '30vh',
    },
    events: {
        backgroundColor: 'blue',
        width: '100vw',
        height: '35vh'
    },
    widgets: {
        backgroundColor: 'green',
        width: '100%',
        height: '35vh'
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
            <section className={css(styles.widgets)}>
                Hwllo fuckface its me again
            </section>
        </body>
    )
}