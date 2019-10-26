import React from 'react'

export default function CreateEventForm(props){
    return(
        <form>
            <label>
               Name:
                <input type="text" name='eventname' value={props.values.eventname} onChange={props.onChange}></input>
            </label>
            <label>
                Description:
                <input type="text" name='description' value={props.values.description} onChange={props.onChange}></input>
            </label>
            <button onClick={props.onSubmit}>Submit</button>
        </form>
    )
}