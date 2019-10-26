import React from 'react'
import {connect} from 'react-redux'
import CreateEventForm from './CreateEventForm'
import {createEvent} from '../actions/eventsaction'

class CreateEventFormContainer extends React.Component{

    state={
        eventname:'',
        description:''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    onSubmit = (event) => {
        event.preventDefault();
        this.props.createEvent(this.state)
        this.setState({
            eventname:'',
            description:''
        })

    }

    render(){
        return(
           <CreateEventForm 
              onChange={this.onChange}
              values={this.state} 
              onSubmit={this.onSubmit}/>
        )
    }
}


export default connect(null,{createEvent})(CreateEventFormContainer)