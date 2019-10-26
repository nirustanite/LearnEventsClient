import React from 'react'
import {connect} from 'react-redux'
import {fetchEventDetails} from '../actions/eventsaction'
import EventDetails from './EventDetails'

class EventDetailsContainer extends React.Component{

    componentDidMount(){
       this.props.fetchEventDetails(Number(this.props.match.params.id))
    }

    render(){
       return <EventDetails event={this.props.eventinfo} />
    }
}


const mapStateToProps = (state) => {
    console.log("Whats in state",state)
    return{
        eventinfo:state.eventDetail
    }
}
export default connect(mapStateToProps,{fetchEventDetails})(EventDetailsContainer)