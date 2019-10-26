import React from 'react';
import {connect} from 'react-redux'
import {loadEvents,toggle} from '../actions/eventsaction'
import EventList from './EventList'


class EventListContainer extends React.Component{


    componentDidMount(){
        this.props.loadEvents();
    }

    onSubmit = (event) => {
        //event.preventDefault()
        console.log("inside on submit")
        this.props.toggle()
    }

    render(){
       
       return <EventList events={this.props.eventslist}
        onSubmit={this.onSubmit}
        displayform={this.props.displayform} />
    }
}

const mapStateToProps = (state) => {
    console.log("Whats in the state???", state)
    return {
       eventslist: state.events,
       displayform: state.toggle.displayform
    }
}

export default connect(mapStateToProps, {loadEvents, toggle})(EventListContainer)

