import {EVENT_DETAIL_FETCH} from '../actions/eventsaction';

const reducer = (state = {}, action = {}) => {
   switch(action.type){
       case EVENT_DETAIL_FETCH:
           console.log("list of events", action.event)
           return action.event
        default:
            return state
   }
}


export default reducer