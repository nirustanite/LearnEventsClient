import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import EventListContainer from './components/EventListContainer'
import EventDetailsContainer from './components/EventDetailsContainer'

class App extends React.Component {
   render(){
     return(
       <React.Fragment>
          <h3> Welcome to Learn events</h3>
          <Route path="/" exact component={EventListContainer} />
          <Route path="/events/:id" component={EventDetailsContainer} />
       </React.Fragment>
     
     )
   }
}

export default App;
