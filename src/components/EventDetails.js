import React from 'react'

export default function EventDetails(props){
    console.log(props.event)
   return(
       <React.Fragment>
            {props.event && <p>{props.event.eventname}</p>}
            {props.event && <p>{props.event.description}</p>}
       </React.Fragment>
   )
}