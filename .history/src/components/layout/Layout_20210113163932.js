import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
    greeting: {
        backgroundColor: 'red',
        width: '100vw',
        height: '30vh'
    }
})

export default function Layout() {
    return (
        <body>
            <section className={css(styles.greeting)}>
                Hwllo fuckface its me again
            </section>
        </body>
    )
}