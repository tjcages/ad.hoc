import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import '../../App.css'

const coolFont = {
    fontFamily: 'Nunito Sans, Helvetica, Arial, serif',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 600,
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        maxWidth: '100vw',
        maxHeight: '100vh',
        fontFamily: coolFont
    },
    greeting: {
        backgroundColor: 'red',
        height: '25vh',
        justifyContent: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
        display: 'flex',
    },
    greeting_flex: {
        width: '100%',
        backgroundColor: 'purple',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center'
    },
    greeting_time: {
        backgroundColor: 'tan',
        display: 'grid',
        textAlign: 'right'
    },
    events: {
        backgroundColor: 'blue',
        height: '40vh',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    widget_player: {
        backgroundColor: 'green',
        height: '33vh',
        paddingLeft: '5%',
        paddingRight: '5%',
        flexDirection: 'row',
    },
    widgets: {
        backgroundColor: 'orange',
        height: '70%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-between'
    },
    player: {
        backgroundColor: 'brown',
        height: '30%',
    },
    widget_slot_start: {
        height: '100%',
        marginRight: '8px',
        border: '1px solid #111111',
        flexGrow: 1,
        padding: '32px',
        textAlign: 'center',
    },
    widget_slot_middle: {
        height: '100%',
        marginRight: '8px',
        marginLeft: '8px',
        border: '1px solid #111111',
        flexGrow: 1,
        padding: '32px',
        textAlign: 'center',
    },
    widget_slot_end: {
        height: '100%',
        marginLeft: '8px',
        border: '1px solid #111111',
        flexGrow: 1,
        padding: '32px',
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    title2: {
        fontSize: '28px',
        fontWeight: 500,
    },
    subtitle: {
        fontSize: '18px',
        fontWeight: 400,
    }
})

export default function Layout() {
    return (
        <body className={css(styles.body)}>
            <section className={css(styles.greeting)}>
                <div className={css(styles.greeting_flex)}>
                    <span>Good morning, Ramsés</span>
                    <div className={css(styles.greeting_time)}>
                        <span className={css(styles.title2)}>Good morning, Ramsés</span>
                        <span className={css(styles.subtitle)} style={{paddingTop: "8px"}}>Good morning, Ramsés</span>
                    </div>
                </div>
            </section>
            <section className={css(styles.events)}>
                Hwllo fuckface its me again
            </section>
            <section className={css(styles.widget_player)}>
                <div className={css(styles.widgets)}>
                    <div className={css(styles.widget_slot_start)}>
                        Hello
                    </div>
                    <div className={css(styles.widget_slot_middle)}>
                        Darkness
                    </div>
                    <div className={css(styles.widget_slot_middle)}>
                        My Old
                    </div>
                    <div className={css(styles.widget_slot_end)}>
                        Friend
                    </div>
                </div>
                <div className={css(styles.player)}>
                    Hungrey!
                </div>
            </section>
        </body>
    )
}