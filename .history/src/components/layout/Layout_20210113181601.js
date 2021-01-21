import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        maxWidth: '100vw',
        maxHeight: '100vh',
    },
    greeting: {
        height: '25vh',
        justifyContent: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
        display: 'flex',
    },
    greeting_flex: {
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center'
    },
    greeting_time: {
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
    title: {
        fontSize: '36px',
        fontWeight: 600,
    },
    title2: {
        fontSize: '28px',
        fontWeight: 500,
    },
    subtitle: {
        fontSize: '20px',
        fontWeight: 400,
        opacity: 0.4
    },
    text: {
        fontSize: '18px',
        fontWeight: 400,
        opacity: 0.4
    },
    block: {
        backgroundColor: '#111111',
        paddingTop: '4px'
    }
})

export default function Layout() {
    return (
        <body className={css(styles.body)}>
            <section className={css(styles.greeting)}>
                <div className={css(styles.greeting_flex)}>
                    <span className={css(styles.title)}>Good morning, <span style={{color: "#fac03e"}}>Ramsés</span></span>
                    <div className={css(styles.greeting_time)}>
                        <span className={css(styles.title2)}>9:15am</span>
                        <span className={css(styles.subtitle)} style={{paddingTop: "8px"}}>Thursday, 24th July 2021</span>
                    </div>
                </div>
            </section>
            <section className={css(styles.events)}>
                <div className={css(styles.greeting_flex)}>
                    <span className={css(styles.subtitle)}>Now</span>
                    <div>
                        <span className={css(styles.subtitle)}>Now</span>
                        <span className={css(styles.title2)}>Design huddle</span>
                        <span className={css(styles.text)}>Online • Work</span>
                    </div>
                </div>
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