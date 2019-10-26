import React from 'react'
import {Link} from 'react-router-dom'
import CreateEventFormContainer from './CreateEventFormContainer'

export default function EventList(props){
    console.log("props",props.events)
    console.log("displayform",props.displayform)
    return(
        <React.Fragment>
            <ul>
                {props.events.map(event => {
                    return <li key={event.id}>
                      <Link to={`/events/${event.id}`}>{event.eventname}</Link> 
                    </li>
                })}
            </ul>
            <button onClick={props.onSubmit}>Add Event</button>
            {props.displayform && <CreateEventFormContainer />}
        </React.Fragment>
    )
}