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
        display: 'flex',
    },
    events_flex: {
        display: 'inline-block',
    },
    events_flex_upcoming: {
        alignItems: 'center',
        display: 'inline-block',
        marginLeft: '132px',
    },
    events_flex_upcoming2: {
        alignItems: 'center',
        display: 'inline-block',
        marginLeft: '16px',
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
        opacity: 0.4,
    },
    text: {
        fontSize: '18px',
        fontWeight: 400,
        opacity: 0.4
    },
    block: {
        backgroundColor: '#111111',
        display: 'grid',
        color: 'white',
        marginTop: '8px',
        paddingLeft: '32px',
        paddingRight: '32px',
        paddingTop: '24px',
        paddingBottom: '24px',
        minWidth: '332px',
        maxWidth: '364px'
    },
    block_upcoming: {
        backgroundColor: '#f7f7f7',
        display: 'grid',
        color: '#111111',
        marginTop: '8px',
        paddingLeft: '32px',
        paddingRight: '32px',
        paddingTop: '24px',
        paddingBottom: '24px',
        minWidth: '332px',
        maxWidth: '364px'
    }, 
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
                <div className={css(styles.events_flex)}>
                    <span className={css(styles.subtitle)}>Now</span>
                    <div className={css(styles.block)}>
                        <span className={css(styles.subtitle)} style={{paddingBottom: '8px'}}>9:00am</span>
                        <span className={css(styles.title2)}>Design huddle</span>
                        <span className={css(styles.text)}>Online • Work</span>
                    </div>
                </div>

                <div className={css(styles.events_flex_upcoming)}>
                    <span className={css(styles.subtitle)} style={{opacity: 0.3}}>Upcoming</span>
                    <div className={css(styles.block_upcoming)}>
                        <span className={css(styles.subtitle)} style={{paddingBottom: '8px'}}>9:00am</span>
                        <span className={css(styles.title2)}>Design huddle</span>
                        <span className={css(styles.text)}>Online • Work</span>
                    </div>
                </div>
                <div className={css(styles.events_flex_upcoming2)}>
                    <span className={css(styles.subtitle)} style={{opacity: 0.3}}>Upcoming</span>
                    <div className={css(styles.block_upcoming)}>
                        <span className={css(styles.subtitle)} style={{paddingBottom: '8px'}}>9:00am</span>
                        <span className={css(styles.title2)}>Design huddle</span>
                        <span className={css(styles.text)}>Online • Work</span>
                    </div>
                </div>
                <div className={css(styles.events_flex_upcoming2)}>
                    <span className={css(styles.subtitle)} style={{opacity: 0.3}}> </span>
                    <div className={css(styles.block_upcoming)}>
                        <span className={css(styles.subtitle)} style={{paddingBottom: '8px'}}>9:00am</span>
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