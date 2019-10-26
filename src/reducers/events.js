import {EVENT_FETCH,CREATE_SUCCESS} from '../actions/eventsaction';

const reducer = (state = [], action = {}) => {
   switch(action.type){
       case EVENT_FETCH:
           console.log("list of events", action.events)
           return action.events
        // case EVENT_DETIAL_FETCH:
        //     return [...state,{eventDetail:action.event}]
        case CREATE_SUCCESS:
            return [...state,action.event]
        default:
            return state
   }
}


export default reducer