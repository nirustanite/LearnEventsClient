import request from 'superagent'
const url = "http://localhost:4000"


const eventFetch =  events => ({
    type:EVENT_FETCH,
    events
})


const eventDetailFetch = event => {
   return {
       type:EVENT_DETAIL_FETCH,
       event
   }
}


const createEventSuccess = event => ({
    type:CREATE_SUCCESS,
    event
})

export const toggle = () => {
    return{
        type:TOGGLE,
        payload:{
            displayform: true
        }
    }
}

export const loadEvents = () => (dispatch) => {
    request 
        .get(`${url}/events`)
        .then(response => {
            console.log("response.body",response.body)
            dispatch(eventFetch(response.body))
        })
}


export const fetchEventDetails = (id) => (dispatch) => {
    request
       .get(`${url}/events/${id}`)
       .then(response =>{
           console.log("response.body",response.body)
           dispatch(eventDetailFetch(response.body))
       })
}

export const createEvent = (data) => (dispatch) => {
    console.log(data)
    request
        .post(`${url}/events`)
        .send(data)
        .then(response => {
            console.log("response.body",response.body)
            dispatch(createEventSuccess(response.body))
        })
}

export const EVENT_FETCH = 'EVENT_FETCH';
export const EVENT_DETAIL_FETCH = 'EVENT_DETAIL_FETCH';
export const TOGGLE = 'TOGGLE';
export const CREATE_SUCCESS = 'CREATE_SUCCESS'