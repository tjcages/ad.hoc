import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
    greeting: {
        backgroundColor: 'red'
    }
})

export default function Layout() {
    return (
        <section className={css(styles.greeting)}>
            Hwllo fuckface its me again
        </section>
    )
}