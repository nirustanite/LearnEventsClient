import { combineReducers } from 'redux'
import events from './events'
import eventDetail from './eventDetail'
import toggle from './toggle'

export default combineReducers({
  events,
  eventDetail,
  toggle
})