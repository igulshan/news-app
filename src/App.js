import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import NewsBox from './Components/NewsBox';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <NavBar />
          <Routes>
            <Route exact path='/'  element={<NewsBox key="home" category="" pageSize={10} />} />
            <Route exact path='/general'  element={<NewsBox key="general" category={"general"} pageSize={10} />} />
            <Route exact path='/business'  element={<NewsBox key="business" category={"business"} pageSize={10} />}/>
            <Route exact path='/entertainment'  element={<NewsBox key="entertainment" category="entertainment" pageSize={10} />} />
            <Route exact path='/science'  element={ <NewsBox key="science" category="science" pageSize={10} /> }/>
            <Route exact path='/technology'   element={<NewsBox key="technology" category="technology" pageSize={10} />}/>
            <Route exact path='/sports'   element={<NewsBox key="sports" category="sports" pageSize={10} />}  />
          </Routes>
        </div>

      </Router>
    )
  }
}
