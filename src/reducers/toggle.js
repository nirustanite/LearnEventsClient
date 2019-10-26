import {TOGGLE} from '../actions/eventsaction';

const initialState = {
    displayform: false
}

const reducer = (state = initialState, action = {}) => {
   switch(action.type){
       case TOGGLE:
           console.log(action.payload)
           return {...action.payload}
        default:
            return state
   }
}


export default reducer